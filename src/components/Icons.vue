<script setup lang="ts">
type TIconId = "codesandbox" | "github" | "linkedin";
type TIconProps = { id: TIconId; isPresentation?: boolean };

const { id, isPresentation } = defineProps<TIconProps>();
</script>

<template>
	<svg v-if="id" :class="`u-${id}-icon`" viewBox="0 0 24 24">
		<use crossorigin="anonymous" :xlink:href="`/svg/${id}.svg#${id}`"
			:aria-hidden="!isPresentation"></use>
	</svg>
</template>

<style scoped>
svg {
	display: inline-block;
	fill: inherit;
}

use {
	pointer-events: none;
}
</style>
