<template>
    <div class="flex flex-col px-4 mx-auto max-w-6xl h-full">
        <NuxtLoadingIndicator
            :throttle="50"
            color="linear-gradient(to right, #7f27c7, #f30386)"
        />
        <Navbar />
        <NuxtPage />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: translateY(6px);
}

.layout-enter-active,
.layout-leave-active {
    transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
}

.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    transform: translateY(6px);
}
</style>
