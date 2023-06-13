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
        :class="`flex flex-row items-center gap-1 rounded-md py-1.5
        text-sm transition-colors cursor-pointer ${
            props.color ?? ButtonColor.secondary
        }
        ${
            large
                ? 'min-w-[8rem] h-10 text-base justify-center px-4'
                : 'w-max px-3'
        }`"
    >
        <slot />
    </button>
    <nuxt-link
        v-else
        :to="props.href"
        :class="`flex flex-row items-center gap-1 rounded-md py-1.5
        transition-all cursor-pointer text-sm ${
            props.color ?? ButtonColor.secondary
        }
        ${
            large
                ? 'min-w-[8rem] h-10 text-base justify-center px-4'
                : 'w-max px-3'
        }`"
    >
        <slot />
    </nuxt-link>
</template>
