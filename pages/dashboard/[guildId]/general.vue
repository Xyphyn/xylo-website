<script setup lang="ts">
const route = useRoute()

definePageMeta({
    layout: 'guild',
})
</script>

<template>
    <div>
        <NuxtLayout
            :guildId="route.params.guildId"
            v-slot="{ guild, channels, config, onChange }"
        >
            <div class="flex flex-col gap-4 mx-auto w-full max-w-xl">
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
                                config.embedColor = Number(e.target.value.replace('#', '0x'))
                                onChange()
                            }
                        "
                            />
                        </div>
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
                        </pre
                    >
                </details>
            </div>
        </NuxtLayout>
    </div>
</template>
