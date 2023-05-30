<template>
    <div class="flex flex-col gap-2 p-4">
        <div
            class="grid place-items-center w-12 h-12 rounded-full border border-black dark:border-white"
        >
            <slot name="icon" />
        </div>
        <h1 class="text-xl font-bold"><slot name="title" /></h1>
        <slot name="description" />
    </div>
</template>
