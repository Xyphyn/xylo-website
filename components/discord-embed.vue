<template>
    <div
        class="flex relative flex-col gap-2 overflow-hidden rounded-md bg-[#f2f3f5] dark:bg-[#2b2d31] w-full max-w-lg px-4 py-3"
    >
        <div class="absolute top-0 left-0 w-1 h-full bg-black dark:bg-white" />
        <span class="font-bold"><slot name="title" /></span>
        <slot />
    </div>
</template>
