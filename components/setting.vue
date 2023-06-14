<script setup>
import { WrenchIcon } from '@heroicons/vue/20/solid'
</script>

<template>
    <details
        class="p-2 rounded-md border bg-slate-200 border-slate-300 dark:bg-zinc-900 dark:border-zinc-800"
    >
        <summary class="flex flex-col gap-1 p-2 cursor-pointer">
            <span class="flex flex-row gap-2 items-center">
                <WrenchIcon class="w-4 h-4 opacity-50" />
                <h6 class="text-sm"><slot name="title" /></h6>
                <div
                    class="px-1 py-0.5 ml-auto text-xs rounded-md border border-slate-300 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950"
                >
                    <slot name="type" />
                </div>
            </span>
            <p class="text-xs opacity-70"><slot name="description" /></p>
        </summary>
        <div class="pt-2 w-full border-t border-slate-300 dark:border-zinc-800">
            <slot name="input" />
        </div>
    </details>
</template>
