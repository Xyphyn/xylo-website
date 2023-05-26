<script setup>
    let count = ref(0)

    const increment = () => count.value++
</script>

<template>
    <p>count is: {{ count }}</p>
    <button class="bg-black text-white dark:bg-white dark:text-black" @click="increment">increment</button>
</template>