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
            <div
                class="overflow-visible absolute top-0 left-0 z-10 w-full h-full backdrop-blur-3xl backdrop-brightness-50"
                v-if="!config.logging.enabled"
            >
                <div
                    class="grid absolute inset-0 place-items-center w-full h-full backdrop-blur-3xl"
                >
                    <div
                        class="flex flex-col gap-4 p-4 max-w-xl bg-white rounded-md border shadow-lg border-slate-200 dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <h1 class="text-xl font-bold">Logging</h1>
                        <p>
                            Configure logs for moderation actions, message
                            edits, chat events, and more.
                        </p>
                        <Linkbutton
                            button
                            @click="() => (config.logging.enabled = true)"
                            :color="ButtonColor.primary"
                            large
                        >
                            Enable
                        </Linkbutton>
                    </div>
                </div>
            </div>
            <Setting class="mx-auto">
                <template #title>Log channel</template>
                <template #type>Channel</template>
                <template #description>
                    The channel to send logs to. (The only ones displayed are
                    ones Xylo has access to.)
                </template>
                <template #input>
                    <select
                        placeholder="Select channel"
                        class="p-2 w-full max-w-xs rounded-[4px] text-sm bg-slate-100 dark:bg-zinc-950"
                        v-model="config.logging.channel"
                    >
                        <option
                            :selected="!config.logging.channel"
                            :value="undefined"
                        >
                            None
                        </option>
                        <option
                            v-for="channel in channels"
                            :value="channel.id"
                            :selected="
                                guild?.config.logging.channel == channel.id
                            "
                        >
                            #{{ channel.name }}
                        </option>
                    </select>
                </template>
            </Setting>
        </NuxtLayout>
    </div>
</template>
