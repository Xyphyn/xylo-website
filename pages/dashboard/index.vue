<script setup lang="ts">
useSeoMeta({
    title: 'Dashboard',
})

const { data } = await useAsyncData(async (app) => {
    const res = await app?.$xylo.me().catch((_) => {})
    return res?.user
})
</script>

<template>
    <div
        class="min-h-[calc(100svh-124px)] flex flex-col items-center justify-center gap-8"
    >
        <div
            class="flex flex-col gap-8 justify-center items-center"
            v-if="data"
        >
            <h1 class="text-4xl font-black">Choose a guild</h1>
            <ul
                class="flex flex-row flex-wrap gap-2 justify-center items-center mx-auto max-w-xl"
            >
                <p v-if="data?.guilds?.length == 0">
                    Xylo is not in any of your guilds. Perhaps you might want to
                    invite it. 😏
                </p>
                <nuxt-link
                    :to="`/dashboard/${guild.id}`"
                    class="flex flex-col gap-2 items-center text-center"
                    v-for="guild in data.guilds"
                >
                    <img
                        :src="
                            guild.icon
                                ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=64`
                                : `https://api.dicebear.com/6.x/initials/svg?backgroundColor=313338&seed=${guild.name}`
                        "
                        class="p-1 w-20 h-20 rounded-full bg-[#313338]"
                        width="96"
                        height="96"
                    />
                </nuxt-link>
            </ul>
        </div>
        <div class="flex flex-col gap-8 justify-center items-center" v-else>
            <Linkbutton
                href="https://discord.com/api/oauth2/authorize?client_id=977240559641038921&redirect_uri=https%3A%2F%2Fxylo.xylight.dev%2Fapi%2Foauth2&response_type=code&scope=identify%20guilds"
                :color="ButtonColor.accent"
                :large="true"
            >
                Sign in with Discord
            </Linkbutton>
        </div>
    </div>
</template>
