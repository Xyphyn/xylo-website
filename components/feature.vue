<template>
    <div class="flex flex-col gap-2 p-4">
        <div
            class="grid place-items-center w-12 h-12 text-white bg-gradient-to-tl rounded-full dark:border dark:border-white from-primary to-secondary"
        >
            <slot name="icon" />
        </div>
        <span class="text-xl font-bold"><slot name="title" /></span>
        <slot name="description" />
    </div>
</template>
