<script setup>
import { ButtonColor } from './color'

const props = defineProps({
    href: String,
    onclick: (e) => any,
    button: Boolean,
    color: ButtonColor,
    large: Boolean,
})
</script>

<template>
    <button
        v-if="props.button"
        @click="onclick"
        :class="`flex flex-row items-center gap-1 rounded-md px-3 py-1.5
        text-sm transition-colors cursor-pointer ${props.color}
        ${large ? 'w-36 h-10 text-base justify-center' : 'w-max'}`"
    >
        <slot />
    </button>
    <a
        v-else
        :href="props.href"
        :class="`flex flex-row items-center gap-1 rounded-md py-1.5
        transition-all cursor-pointer text-sm ${props.color}
        ${
            large ? 'min-w-36 h-10 text-base justify-center px-4' : 'w-max px-3'
        }`"
    >
        <slot />
    </a>
</template>
