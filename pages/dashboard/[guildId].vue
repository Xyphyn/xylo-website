<script setup>
const route = useRoute()

definePageMeta({
    layout: 'guild',
    middleware: [
        (to, from) => {
            const app = useNuxtApp()
            if (!app.$xylo.validToken) return navigateTo('/dashboard')
        },
    ],
})

const { data: guild } = await useAsyncData(async (app) => {
    // @ts-ignore -- typescript's bugging out for some reason
    return await app?.$xylo.guild(route.params.guildId)
})

useSeoMeta({
    title: 'Dashboard',
})
</script>

<template>
    <div>
        <NuxtLayout>
            <template #image>
                <img
                    :src="
                        guild.icon
                            ? `https://cdn.discordapp.com/icons/${guild.data.id}/${guild.data.icon}.webp?size=64`
                            : `https://api.dicebear.com/6.x/initials/svg?backgroundColor=313338&seed=${guild.data.name}`
                    "
                    class="rounded-full"
                    width="64"
                    height="64"
                />
            </template>
            <template #title>
                {{ guild?.data?.name }}
            </template>
            <h1 class="text-xl font-bold">JSON Data</h1>
            <pre>
                {{ guild }}
            </pre>
        </NuxtLayout>
    </div>
</template>
