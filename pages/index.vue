<script setup lang="ts">
import {
    ChevronDownIcon,
    LanguageIcon,
    WrenchIcon,
} from '@heroicons/vue/20/solid'
import { ButtonColor } from '~/components/color'

useSeoMeta({
    title: 'Xylo',
    description: 'A powerful discord bot for all of your needs.',
})
</script>

<template>
    <div
        class="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] gap-8 max-w-4xl mx-auto"
    >
        <LogoAnimated :width="100" :height="100" />
        <h1 class="text-5xl font-black text-center md:text-7xl">
            A
            <span
                class="from-[#7f27c7] to-[#f30386] bg-gradient-to-r bg-clip-text text-transparent s"
            >
                powerful
            </span>
            Discord bot.
        </h1>
        <p class="text-center opacity-80">
            Xylo is a multipurpose Discord bot with many features for many
            purposes. From translation, moderation, cat photos, and to scrolling
            Reddit. It is built with interactivity in mind, and utilizes many of
            Discord's new API features such as buttons, modals, and selection
            menus.
        </p>
        <div class="flex gap-4 items-center md:flex-row">
            <Linkbutton
                :large="true"
                :color="ButtonColor.accent"
                href="https://discord.com/api/oauth2/authorize?client_id=977240559641038921&permissions=1376805841990&scope=bot%20applications.commands"
            >
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
    <section class="flex flex-col mx-auto w-full max-w-4xl">
        <h1
            class="self-center py-8 m-4 w-full text-5xl font-black text-center border-b md:text-left border-black/10 dark:border-white/10"
            id="features"
        >
            Features
        </h1>

        <div class="flex flex-col gap-4 md:flex-row">
            <Feature class="flex-1">
                <template v-slot:icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 100 100"
                        fill="none"
                    >
                        <path
                            class="stroke-black dark:stroke-white"
                            d="M75 25L25 75"
                            stroke-width="10"
                            stroke-linecap="round"
                        />
                    </svg>
                </template>
                <template v-slot:title>Slash commands</template>
                <template v-slot:description>
                    <p class="text-sm">
                        No more prefixes or !help. Just press
                        <kbd>/</kbd>
                        and you can see every command.
                    </p>
                </template>
            </Feature>
            <Feature class="flex-1">
                <template v-slot:icon>
                    <LanguageIcon class="w-6 h-6" />
                </template>
                <template v-slot:title>Translation</template>
                <template v-slot:description>
                    <p class="text-sm">
                        With /translate, you can translate any message to
                        another language in seconds
                    </p>
                </template>
            </Feature>
            <Feature class="flex-1">
                <template v-slot:icon>
                    <WrenchIcon class="w-6 h-6" />
                </template>
                <template v-slot:title>Moderation</template>
                <template v-slot:description>
                    <p class="text-sm">
                        Like any of the 234,523,791 bots out there, this bot
                        supports warning, automutes, and timeouts.
                    </p>
                </template>
            </Feature>
        </div>
    </section>
    <section class="flex flex-col mx-auto w-full max-w-4xl">
        <h1
            class="self-center m-4 w-full text-5xl font-black text-center border-b md:text-left border-black/10 dark:border-white/10"
        ></h1>
        <div
            class="flex flex-col gap-8 items-center m-8 mx-4 md:flex-row md:mx-0"
        >
            <div
                class="flex flex-col flex-1 gap-4 w-full text-center md:text-left"
            >
                <h1 class="text-2xl font-bold md:text-3xl">Interactivity</h1>
                <p class="opacity-80">
                    Xylo is built to utilize many of Discord's bot features. A
                    common one is
                    <strong>buttons</strong>
                    . They can be used for an undo button to a warning, to go to
                    the next post in the reddit command, or for simple games.
                </p>
            </div>
            <DiscordMessage class="flex-1">
                <DiscordEmbed>
                    <template v-slot:title>Warning</template>
                    <p class="text-sm">
                        <span class="font-bold">Xylight</span>
                        has been warned.
                    </p>
                    <h6 class="font-bold">Reason</h6>
                    <p class="text-sm">
                        Making insensitive comments to server members.
                    </p>
                </DiscordEmbed>
                <div class="mt-1">
                    <DiscordButton>Undo</DiscordButton>
                </div>
            </DiscordMessage>
        </div>
        <div
            class="flex flex-col gap-8 items-center m-8 mx-4 md:flex-row-reverse md:mx-0"
        >
            <div
                class="flex flex-col flex-1 gap-4 w-full text-center md:text-right"
            >
                <h1 class="text-2xl font-bold md:text-3xl">Utilities</h1>
                <p class="opacity-80">
                    Xylo replaces many old systems for common utilities, such as
                    reaction roles, replacing them with modern alternatives,
                    like selection menus.
                </p>
            </div>
            <DiscordMessage class="flex-1">
                <DiscordEmbed>
                    <template v-slot:title>Roles</template>
                    <p class="text-sm">Select your roles here!</p>
                </DiscordEmbed>
                <div
                    class="flex flex-row items-center p-2 py-1.5 mt-1 w-screen max-w-sm rounded-md cursor-pointer bg-black/10"
                >
                    <div
                        class="px-2 py-1.5 bg-white dark:bg-zinc-950 rounded-[3px] w-max"
                    >
                        Role 1
                    </div>
                    <ChevronDownIcon class="ml-auto w-5 h-5" />
                </div>
            </DiscordMessage>
        </div>
    </section>
</template>
