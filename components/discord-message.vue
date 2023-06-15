<template>
    <div class="flex flex-row gap-4">
        <div class="h-full min-w-[44px]">
            <slot name="profile">
                <img
                    src="/img/logo-background.svg"
                    width="44"
                    height="44"
                    class="rounded-full"
                    alt="Xylo logo"
                />
            </slot>
        </div>
        <div class="flex flex-col">
            <slot name="profile-name">
                <div class="flex flex-row gap-2 items-center font-medium">
                    Xylo Bot
                    <div
                        class="bg-[#5865f2] text-white fill-white flex flex-row items-center text-[11px] h-4 rounded-sm font-medium px-1"
                    >
                        BOT
                    </div>
                </div>
            </slot>
            <slot></slot>
        </div>
    </div>
</template>
