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
                <div class="flex flex-col gap-0.5 text-xl">
                    <h3>{{ guild?.data?.name }}</h3>
                    <span class="text-xs opacity-70">
                        {{ guild?.data.id }}
                    </span>
                </div>
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
                <div class="flex flex-col gap-4 w-full max-w-xl md:mr-auto">
                    <Setting>
                        <template #title>Embed color</template>
                        <template #description>
                            The color used in message embeds
                        </template>
                        <template #type>Color</template>
                        <template #input>
                            <div class="flex flex-row gap-1 items-center px-2">
                                <span class="text-sm">Color</span>
                                <input
                                    type="color"
                                    :value="`#${guild?.config.embedColor.toString(
                                        16
                                    )}`"
                                    @change="
                            (e: any) => {
                                newData.embedColor = Number(e.target.value.replace('#', '0x'))
                            }
                        "
                                />
                            </div>
                        </template>
                    </Setting>
                    <Setting>
                        <template #title>Channel</template>
                        <template #description>
                            The channel to send moderation, update, etc logs to.
                        </template>
                        <template #type>Channel</template>
                        <template #input>
                            <select
                                placeholder="Select channel"
                                class="p-2 w-full max-w-xs rounded-[4px] text-sm bg-slate-100 dark:bg-zinc-950"
                                v-model="newData.logChannel"
                            >
                                <option
                                    :selected="!guild?.config.logChannel"
                                    :value="undefined"
                                >
                                    None
                                </option>
                                <option
                                    v-for="channel in channels"
                                    :value="channel.id"
                                    :selected="
                                        guild?.config.logChannel == channel.id
                                    "
                                >
                                    #{{ channel.name }}
                                </option>
                            </select>
                        </template>
                    </Setting>
                    <details
                        class="p-4 max-w-full text-sm break-words rounded-md border bg-slate-200 border-slate-300 dark:bg-zinc-900 dark:border-zinc-800"
                    >
                        <summary class="cursor-pointer">JSON data</summary>
                        <pre
                            class="w-full max-w-full whitespace-pre-wrap break-words"
                        >
                            {{
                                JSON.stringify(guild, undefined, 4).trimStart()
                            }}
                        </pre>
                    </details>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>
