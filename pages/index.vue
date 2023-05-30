<script setup>
import Button from '~/components/linkbutton.vue'
import { ButtonColor } from '~/components/color'
</script>

<template>
    <div class="flex flex-col">
        <p>cool</p>
        <Button href="/" :color="ButtonColor.primary">test thing</Button>
    </div>
</template>
