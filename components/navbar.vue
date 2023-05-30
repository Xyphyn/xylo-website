<script setup>
import { ButtonColor } from '~/components/color'
import { PlusIcon } from '@heroicons/vue/20/solid'
</script>

<template>
    <nav
        class="flex flex-row gap-4 justify-between items-center py-4 h-16 text-sm"
    >
        <span>thing</span>
        <div
            class="flex flex-row justify-center items-center px-4 py-1 bg-white rounded-full shadow-md"
        >
            <linkbutton :color="ButtonColor.secondary">Dashboard</linkbutton>
        </div>
        <Linkbutton :color="ButtonColor.primary">
            <PlusIcon class="w-5 h-5" />
            Invite
        </Linkbutton>
    </nav>
</template>
