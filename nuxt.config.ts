// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/css/main.css'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, inital-scale=1',
            meta: [
                {
                    name: 'description',
                    content: 'A dashboard for Xylo bot',
                },
            ],
        },
    },
})
