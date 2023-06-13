interface GatedIndex {
    user: User
}

interface User {
    guilds: Guild[]
    id: string
    username: string
    avatar: string
}

interface Guild {
    id: string
    name: string
    icon: string | null
    owner: boolean
}

export class XyloClient {
    private baseUrl: string
    private token?: string

    constructor(server: string, token?: string) {
        this.baseUrl = server
        this.token = token
    }

    /**
     * @returns Whether the user is authenticated or not
     */
    async ping() {
        const res: { authenticated: boolean } = await fetch(
            `${this.baseUrl}/ping`,
            {
                headers: {
                    authorization: this.token ?? '',
                },
            }
        ).then((data) => data.json())

        if (!res.authenticated) {
            this.token = undefined
        }

        return res.authenticated
    }

    get validToken() {
        return this.token != undefined
    }

    async me() {
        if (!this.token) throw Error('Unauthenticated')

        const res: GatedIndex = await fetch(`${this.baseUrl}/gated/me`, {
            headers: {
                authorization: this.token,
            },
        }).then((data) => data.json())

        return res.user
    }

    async guild(id: string): Promise<any> {
        if (!this.token) throw Error('Unauthenticated')

        const res = await fetch(`${this.baseUrl}/gated/guild/${id}`, {
            headers: {
                authorization: this.token,
            },
        })

        if (res.status >= 400) {
            return null
        }

        const data = await res.json()

        return data
    }
}

export default defineNuxtPlugin(async () => {
    const config = useRuntimeConfig()
    const cookie = useCookie('discord-token')

    const xylo = new XyloClient(
        config.public.botServer,
        cookie.value as string | undefined // why is cookie.value string | null | undefined
    )

    await xylo.ping()

    return {
        provide: { xylo },
    }
})
