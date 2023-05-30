<script setup>
import Button from '~/components/linkbutton.vue'
import { ButtonColor } from '~/components/color'
</script>

<template>
    <div
        class="flex flex-col gap-8 items-center m-8 mx-4 md:flex-row md:mx-0 md:items-start"
    >
        <div class="flex flex-col flex-1 gap-4 text-center md:text-left">
            <h1 class="text-3xl font-bold md:self-start md:text-5xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas hic aliquam nesciunt molestiae nulla. Dolore labore
                deserunt corrupti quaerat iure commodi assumenda consequatur
                adipisci! Sunt voluptate ab ipsum hic quasi? Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Iste consequatur, quod
                esse suscipit voluptatum, doloremque neque placeat id ullam,
                quae facere veniam officiis beatae magnam odit. Possimus vitae
                quam enim! Lorem ipsum, dolor sit amet consectetur adipisicing
                elit.
            </p>
        </div>
        <DiscordMessage class="flex-1">
            <DiscordEmbed>
                <template v-slot:title>This is an embed.</template>
                <template v-slot:description>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat veniam suscipit earum adipisci veritatis
                        magnam, totam eaque molestias eos quisquam, quidem ipsum
                        culpa in at odit hic natus aliquid libero!
                    </p>
                </template>
            </DiscordEmbed>
        </DiscordMessage>
    </div>
</template>
