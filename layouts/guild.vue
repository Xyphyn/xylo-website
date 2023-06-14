<script setup lang="ts">
import { ArrowLeftIcon, Cog6ToothIcon } from '@heroicons/vue/20/solid'
</script>

<template>
    <div class="flex flex-col p-4">
        <div
            class="flex flex-row gap-4 items-center py-4 w-full border-b border-white/20"
        >
            <Linkbutton href="/dashboard">
                <ArrowLeftIcon class="w-4 h-4" />
                Back
            </Linkbutton>
            <div class="p-1 w-16 h-16 rounded-full bg-[#313338]">
                <slot name="image" />
            </div>
            <h1 class="text-3xl font-bold">
                <slot name="title" />
            </h1>
        </div>
        <div class="flex flex-col gap-4 py-4 md:flex-row">
            <nav class="flex flex-col flex-1 gap-2">
                <Linkbutton
                    :large="true"
                    style="
                        width: 100% !important;
                        justify-content: start !important;
                    "
                >
                    <Cog6ToothIcon class="w-4 h-4" />
                    General
                </Linkbutton>
            </nav>
            <div class="flex-[3] flex flex-col gap-2">
                <slot />
            </div>
        </div>
    </div>
</template>
