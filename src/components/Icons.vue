<script setup lang="ts">
type TIconId = "codesandbox" | "github" | "linkedin";
type TIconProps = { id: TIconId; isPresentation: true; iconLabel: undefined } | { id: TIconId; isPresentation: false; iconLabel: string };

const { id, isPresentation, iconLabel } = defineProps<TIconProps>();
</script>

<template>
	<svg v-if="id" :class="`u-${id}-icon`" viewBox="0 0 24 24">
		<title v-if="iconLabel">{{ iconLabel }}</title>
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
