<script setup type="ts">
import { ref } from "vue";

const isPresentation = ref(false);
const id = ref("");
</script>

<template>
    <svg :class="`u-${id}-icon`" viewBox="0 0 24 24">
        <use crossorigin="anonymous" :xlink:href="`/svg/${id}.svg#${id}`" :aria-hidden="!isPresentation"></use>
    </svg>
</template>

<style scoped>
    svg{ display: inline-block; fill: inherit;}
    use{ pointer-events: none;}
</style>