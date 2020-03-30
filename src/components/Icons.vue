<template>
    <svg :class="`u-${id}-icon`" viewBox="0 0 24 24">
        <use crossorigin="anonymous" :xlink:href="`/svg/${id}.svg#${id}`" :aria-hidden="!isPresentation"></use>
    </svg>
</template>

<script>

export default {
    props: {
        id: String,
        isPresentation: Boolean
    }
}
</script>

<style scoped>
    svg{ display: inline-block; fill: inherit;}
    use{ pointer-events: none;}
</style>