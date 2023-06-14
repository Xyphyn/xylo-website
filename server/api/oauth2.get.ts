export default defineEventHandler(async (e) => {
    const config = useRuntimeConfig()
    const code = getQuery(e).code as string
    if (!code) {
        return {
            message: 'invalid code',
        }
    }

    const payload: any = {
        client_id: config.clientId,
        client_secret: config.secret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: config.redirectUri,
        scope: `identify guilds`,
    }

    const encodedPayload = Object.keys(payload)
        .map((key: any) => `${key}=${encodeURIComponent(payload[key])}`)
        .join('&')

    const res = await fetch(`https://discord.com/api/oauth2/token`, {
        method: 'POST',
        body: encodedPayload,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })

    const json = await res.json()

    if (res.status >= 400 || !json || !json.access_token) {
        throw createError({
            statusCode: 400,
            statusMessage: JSON.stringify(json),
        })
    }

    setCookie(e, 'discord-token', json.access_token, {})

    return sendRedirect(e, '/dashboard', 300)
})
