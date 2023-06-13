<script setup>
import { ButtonColor } from './color'

const props = defineProps({
    href: String,
    button: Boolean,
    color: ButtonColor,
    large: Boolean,
    disabled: Boolean,
})

const methods = defineEmits(['click'])
</script>

<template>
    <button
        v-if="props.button"
        @click="$emit('click')"
        :class="`flex flex-row items-center gap-1 rounded-md py-1.5
        text-sm transition-colors cursor-pointer ${
            props.color ?? ButtonColor.secondary
        }
        ${
            large
                ? 'min-w-[8rem] h-10 text-base justify-center px-4'
                : 'w-max px-3'
        }
        ${disabled ? 'cursor-not-allowed pointer-events-none opacity-50' : ''}`"
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
        }
        ${disabled ? 'cursor-not-allowed pointer-events-none opacity-50' : ''}`"
    >
        <slot />
    </nuxt-link>
</template>
