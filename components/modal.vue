<script setup lang="ts">
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
})

let open = ref(props.open)
let dialog: any

onMounted(() => {
    if (open) dialog.showModal()
    else dialog.closeModal()
})

watch(open, (open) => {
    if (open) dialog.showModal()
    else dialog.closeModal()
})
</script>

<template>
    <dialog ref="dialog" @click="() => (open = false)">
        <div
            class="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-lg dark:bg-zinc-900"
        >
            <h1 class="text-2xl font-bold"><slot name="title" /></h1>
            <slot />
        </div>
    </dialog>
</template>
