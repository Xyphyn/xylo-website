<script setup>
import { ButtonColor } from './color'

const props = defineProps({
    href: String,
    onclick: (e) => any,
    button: Boolean,
    color: ButtonColor,
})
</script>

<template>
    <button
        v-if="props.button"
        @click="onclick"
        :class="`rounded-md px-3 py-1.5 w-max text-sm transition-colors cursor-pointer ${props.color}`"
    >
        <slot />
    </button>
    <a
        v-else
        :href="props.href"
        :class="`flex flex-row items-center gap-1 rounded-md px-3 py-1.5 w-max text-sm transition-colors cursor-pointer ${props.color}`"
    >
        <slot />
    </a>
</template>
