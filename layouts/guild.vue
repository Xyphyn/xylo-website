<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/20/solid'
import { parse } from 'path'
import { stringify } from 'querystring'
import { GuildConfigData } from '~/plugins/apiClient.js'

const props = defineProps({
    guildId: {
        type: String,
        required: true,
    },
})

useSeoMeta({
    title: 'Dashboard',
})

const app = useNuxtApp()

const { data: guild, refresh: refreshGuild } = await useAsyncData(
    async (app) => await app?.$xylo.guild(props.guildId).get()
)

const { data: channels, refresh: refreshChannels } = await useAsyncData(
    async (app) => await app?.$xylo.guild(props.guildId).channels()
)

let newData: Ref<GuildConfigData> = ref({
    ...guild!.value!.config,
})

function onUpdate() {}

let saving = ref(false)
async function save() {
    saving.value = true

    await app.$xylo.guild(props.guildId).updateConfig(newData.value)

    saving.value = false
}
</script>

<template>
    <div class="flex static flex-col p-4">
        <div
            class="flex flex-col gap-4 py-4 w-full border-b md:items-center md:flex-row border-white/20"
        >
            <div class="flex flex-row gap-4 items-center">
                <Linkbutton href="/dashboard">
                    <ArrowLeftIcon class="w-4 h-4" />
                    <span class="hidden md:inline">Back</span>
                </Linkbutton>
                <div class="p-1 w-16 h-16 rounded-full bg-[#313338]">
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
                </div>
                <h1 class="text-3xl font-bold">
                    <div class="flex flex-col gap-0.5 text-xl">
                        <h3>{{ guild?.data?.name }}</h3>
                        <span class="text-xs opacity-70">
                            {{ guild?.data.id }}
                        </span>
                    </div>
                </h1>
            </div>
            <Linkbutton
                button
                :large="true"
                :color="ButtonColor.primary"
                class="md:w-max md:ml-auto"
                :disabled="saving"
                @click="save"
            >
                Save
            </Linkbutton>
        </div>
        <div class="flex flex-col gap-4 py-4 md:flex-row">
            <nav class="flex flex-col flex-1 gap-2">
                <Linkbutton
                    :href="`/dashboard/${guild?.data.id}/general`"
                    :large="true"
                    style="
                        width: 100% !important;
                        justify-content: start !important;
                    "
                >
                    General
                </Linkbutton>
                <Linkbutton
                    :href="`/dashboard/${guild?.data.id}/logging`"
                    :large="true"
                    style="
                        width: 100% !important;
                        justify-content: start !important;
                    "
                >
                    Logging
                </Linkbutton>
            </nav>
            <div class="flex-[3] flex flex-col gap-2 relative items-start">
                <slot
                    :guild="guild"
                    :config="newData"
                    :channels="channels"
                    :onChange="onUpdate"
                />
            </div>
        </div>
    </div>
</template>
