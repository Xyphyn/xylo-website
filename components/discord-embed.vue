<template>
    <div
        class="flex relative flex-col gap-2 overflow-hidden rounded-md bg-[#2b2d31] w-full max-w-lg px-4 py-3"
    >
        <div class="absolute top-0 left-0 w-1 h-full bg-black dark:bg-white" />
        <h1 class="font-bold"><slot name="title" /></h1>
        <p class="text-sm"><slot name="description" /></p>
    </div>
</template>
