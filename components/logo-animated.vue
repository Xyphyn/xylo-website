<script setup>
const props = defineProps({
    width: Number,
    height: Number,
})
</script>

<template>
    <svg
        :width="props.width ?? 48"
        :height="props.height ?? 48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <linearGradient
            gradientTransform="rotate(315, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="anim-gradient"
        >
            <stop stop-color="black" stop-opacity="1" offset="0%"></stop>
            <stop stop-color="black" stop-opacity="1" offset="100%"></stop>
        </linearGradient>
        <path
            id="animated-hexagon"
            d="M45.5 10.8868C48.594 9.10042 52.406 9.10042 55.5 10.8868L82.3061 26.3632C85.4001 28.1496 87.3061 31.4508 87.3061 35.0235V65.9765C87.3061 69.5492 85.4001 72.8504 82.3061 74.6368L55.5 90.1132C52.406 91.8996 48.594 91.8996 45.5 90.1132L18.6939 74.6368C15.5999 72.8504 13.6939 69.5492 13.6939 65.9765V35.0235C13.6939 31.4508 15.5999 28.1496 18.6939 26.3632L45.5 10.8868Z"
            class="fill-[url(#anim-gradient)]"
        />
    </svg>
</template>

<style scoped>
@keyframes anim1 {
    0% {
        stop-color: #7f27c7;
    }
    50% {
        stop-color: #f303a3;
    }
    100% {
        stop-color: #7f27c7;
    }
}

@keyframes anim2 {
    0% {
        stop-color: #f30386;
    }
    50% {
        stop-color: #277fc7;
    }
    100% {
        stop-color: #f30386;
    }
}

stop {
    stop-color: #7f27c7;
}

stop:first-child {
    stop-color: #7f27c7;

    animation: anim1 8s infinite ease;
}

stop:last-child {
    stop-color: #f30386;
    animation: anim2 8s infinite ease;
}
</style>
