interface GatedIndex {
    user: User
}

interface User {
    guilds: IGuild[]
    id: string
    username: string
    avatar: string
}

interface IGuild {
    id: string
    name: string
    icon: string | null
    owner: boolean
}

interface GuildConfigData {
    embedColor: number
    logChannel?: string
}

export interface ConfigurableGuild {
    data: IGuild
    config: GuildConfigData
}

class Guild {
    private id: string
    private client: XyloClient

    constructor(client: XyloClient, id: string) {
        this.id = id
        this.client = client
    }

    async get(): Promise<ConfigurableGuild | null> {
        return await this.client.send(
            `${this.client.baseUrl}/gated/guild/${this.id}`,
            {},
            true
        )
    }

    async updateConfig(data: GuildConfigData): Promise<GuildConfigData> {
        return await this.client.send(
            `${this.client.baseUrl}/gated/guild/${this.id}/config`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            true
        )
    }

    async channels(): Promise<{ id: string; name: string }[] | null> {
        return await this.client.send(
            `${this.client.baseUrl}/gated/guild/${this.id}/channels`,
            {},
            true
        )
    }
}

export class XyloClient {
    baseUrl: string
    private token?: string

    constructor(server: string, token?: string) {
        this.baseUrl = server
        this.token = token
    }

    /**
     * @returns Whether the user is authenticated or not
     */
    async ping(): Promise<boolean | undefined> {
        const res = await fetch(`${this.baseUrl}/ping`, {
            headers: {
                authorization: this.token ?? '',
            },
        }).catch((_) => {})

        if (!res) return

        if (res.status >= 400) {
            this.token = undefined

            return false
        }

        const json = await res.json()

        if (!json?.authenticated) {
            this.token = undefined
            return false
        }

        return json.authenticated
    }

    get validToken() {
        return this.token != undefined
    }

    async me(): Promise<GatedIndex> {
        return await this.send(`${this.baseUrl}/gated/me`, {})
    }

    guild(id: string): Guild {
        return new Guild(this, id)
    }

    async send<T = any>(
        basePath: string,
        reqOptions: { method?: string; headers?: any; body?: string },
        auth?: boolean
    ): Promise<T> {
        if (!this.token && auth) throw new Error('Missing authentication')
        if (!reqOptions.headers) reqOptions.headers = {}
        if (this.token) reqOptions.headers.authorization = this.token

        return fetch(basePath, reqOptions)
            .then(async (response) => {
                let data: any = {}

                try {
                    data = await response.json()
                } catch (_) {}

                if (response.status >= 400) {
                    throw new Error('test')
                }

                return data as T
            })
            .catch((err) => {
                throw new Error(`${err}`)
            })
    }
}

export default defineNuxtPlugin(async () => {
    const config = useRuntimeConfig()
    const cookie = useCookie('discord-token')

    const xylo = new XyloClient(
        config.public.botServer,
        cookie.value as string | undefined // why is cookie.value string | null | undefined
    )

    const res = await xylo.ping()

    return {
        provide: { xylo },
    }
})
