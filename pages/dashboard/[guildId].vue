<script setup lang="ts">
import { ButtonColor } from '~/components/color'

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
    return await app?.$xylo.getGuild(route.params.guildId as string)
})

useSeoMeta({
    title: 'Dashboard',
})

let disabled = ref(false)

async function save() {
    const app = useNuxtApp()

    disabled.value = true
    await app.$xylo.updateGuildConfig(guild.value!.data.id, newData)

    disabled.value = false
}

const newData = {
    ...guild?.value?.config!,
}
</script>

<template>
    <div>
        <NuxtLayout>
            <template #image>
                <img
                    :src="
                        guild?.data.icon
                            ? `https://cdn.discordapp.com/icons/${guild.data.id}/${guild.data.icon}.webp?size=64`
                            : `https://api.dicebear.com/6.x/initials/svg?backgroundColor=313338&seed=${guild?.data.name}`
                    "
                    class="rounded-full"
                    width="64"
                    height="64"
                />
            </template>
            <template #title>
                {{ guild?.data?.name }}
            </template>
            <div class="flex flex-col gap-4 md:flex-row-reverse">
                <Linkbutton
                    large
                    class="md:max-w-[2rem] md:self-start sticky top-0"
                    :button="true"
                    :color="ButtonColor.primary"
                    @click="save"
                    :disabled="disabled"
                >
                    Save
                </Linkbutton>
                <div class="flex flex-col md:mr-auto">
                    <h1 class="text-xl font-bold">JSON Data</h1>
                    <pre>
                        {{ guild }}
                    </pre>
                    <div
                        class="flex flex-col gap-2 p-4 rounded-lg bg-slate-200 dark:bg-zinc-900"
                    >
                        <h1 class="text-xl font-bold">Embed color</h1>
                        <input
                            type="color"
                            :value="`#${guild?.config.embedColor.toString(16)}`"
                            @change="
                            (e: any) => {
                                newData.embedColor = Number(e.target.value.replace('#', '0x'))
                            }
                        "
                        />
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>
