<script setup lang="ts">
const route = useRoute()

definePageMeta({
    layout: 'guild',
    middleware: [
        (to, from) => {
            const app = useNuxtApp()
            if (!app.$xylo.validToken) return navigateTo('/dashboard')
            return navigateTo(`${to.path}/general`)
        },
    ],
})

const { data: guild } = await useAsyncData(async (app) => {
    const res = await app?.$xylo.guild(route.params.guildId as string).get()
    return res
})

const { data: channels } = await useAsyncData(async (app) => {
    return await app?.$xylo.guild(route.params.guildId as string).channels()
})

useSeoMeta({
    title: 'Dashboard',
})

let disabled = ref(false)

async function save() {
    const app = useNuxtApp()

    disabled.value = true
    const newConfig = await app.$xylo
        .guild(guild.value!.data.id)
        .updateConfig(newData)

    newData = {
        ...newConfig,
    }

    disabled.value = false
}

let newData = {
    ...guild?.value?.config!,
}
</script>

<template>
    <div></div>
</template>
