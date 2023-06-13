// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/css/main.css'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {
                    name: 'description',
                    content: 'A dashboard for Xylo bot',
                },
            ],
        },
    },
    runtimeConfig: {
        secret: process.env.CLIENT_SECRET,
        clientId: process.env.CLIENT_ID,
        redirectUri: process.env.OAUTH_REDIRECT_URI,
        public: {
            botServer:
                process.env.BOT_SERVER_URL ?? `https://xylo-bot.xylight.dev`,
        },
    },
})
