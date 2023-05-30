<script setup>
import { ButtonColor } from '~/components/color'
import { PlusIcon } from '@heroicons/vue/20/solid'
</script>

<template>
    <nav
        class="flex flex-row gap-4 justify-between items-center py-4 mt-2 h-16 text-sm"
    >
        <img
            src="/img/logo.svg"
            width="48"
            height="48"
            class="cursor-pointer"
        />
        <div
            class="flex flex-row gap-2 justify-center items-center px-4 py-1 bg-white rounded-full shadow-md dark:bg-white/5 dark:border-t border-t-white/10"
        >
            <Linkbutton :color="ButtonColor.secondary">Home</Linkbutton>
            <linkbutton :color="ButtonColor.secondary">Dashboard</linkbutton>
        </div>
        <Linkbutton :color="ButtonColor.primary">
            <PlusIcon class="w-4 h-4" />
            Invite
        </Linkbutton>
    </nav>
</template>
