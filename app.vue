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
    transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: translateY(12px);
}

.layout-enter-active,
.layout-leave-active {
    transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    transform: translateY(12px);
}
</style>
