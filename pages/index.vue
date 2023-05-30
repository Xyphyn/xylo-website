<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ButtonColor } from '~/components/color'

useSeoMeta({
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
})
</script>

<template>
    <div
        class="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] gap-8 max-w-4xl mx-auto"
    >
        <h1 class="text-5xl font-black text-center md:text-7xl">
            Lorem ipsum
            <span
                class="from-[#7f27c7] to-[#f30386] bg-gradient-to-r bg-clip-text text-transparent s"
            >
                dolor
            </span>
            sit amet
        </h1>
        <p class="text-center opacity-80">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            enim quis et porro! Ullam nihil quidem magnam obcaecati nemo, cumque
            recusandae labore aspernatur, nisi in nulla eum fugit facere
            perferendis.
        </p>
        <div class="flex gap-4 items-center md:flex-row">
            <Linkbutton :large="true" :color="ButtonColor.accent">
                Invite
            </Linkbutton>
            <Linkbutton
                :large="true"
                :color="ButtonColor.primary"
                href="/#features"
            >
                Learn more
                <ChevronDownIcon class="w-4 h-4" />
            </Linkbutton>
        </div>
    </div>
    <div class="flex flex-col mx-auto w-full max-w-4xl">
        <h1
            class="self-center py-8 m-4 w-full text-5xl font-black text-center border-b md:text-left border-black/10 dark:border-white/10"
            id="features"
        >
            Features
        </h1>
        <div
            class="flex flex-col gap-8 items-center m-8 mx-4 md:flex-row md:mx-0"
        >
            <div
                class="flex flex-col flex-1 gap-4 w-full text-center md:text-left"
            >
                <h1 class="text-2xl font-bold md:text-5xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h1>
                <p class="opacity-80">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas hic aliquam nesciunt molestiae nulla. Dolore labore
                    deserunt corrupti quaerat iure commodi assumenda consequatur
                    adipisci! Sunt voluptate ab ipsum hic quasi? Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
            <DiscordMessage class="flex-1">
                <DiscordEmbed>
                    <template v-slot:title>This is an embed.</template>
                    <p class="text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat veniam suscipit earum adipisci veritatis
                        magnam, totam eaque molestias eos quisquam, quidem ipsum
                        culpa in at odit hic natus aliquid libero!
                    </p>
                </DiscordEmbed>
            </DiscordMessage>
        </div>
        <div
            class="flex flex-col gap-8 items-center m-8 mx-4 md:flex-row-reverse md:mx-0"
        >
            <div
                class="flex flex-col flex-1 gap-4 w-full text-center md:text-right"
            >
                <h1 class="text-2xl font-bold md:text-5xl" id="features">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h1>
                <p class="opacity-80">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Assumenda, iusto tempore. Officia, repellat? Enim atque
                    nihil omnis dolore fugiat, nemo voluptas impedit ipsam minus
                    inventore temporibus magnam! Ducimus, placeat ut?
                </p>
            </div>
            <DiscordMessage class="flex-1">
                <DiscordEmbed>
                    <template v-slot:title>This is an embed.</template>
                    <p class="text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat veniam suscipit earum adipisci veritatis
                        magnam, totam eaque molestias eos quisquam, quidem ipsum
                        culpa in at odit hic natus aliquid libero!
                    </p>
                </DiscordEmbed>
            </DiscordMessage>
        </div>
    </div>
</template>
