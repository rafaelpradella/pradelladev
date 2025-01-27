<script lang="ts" setup>
import { pipe } from "effect";
import { LINES_CONFIG } from "./LinesConfig.ts";
import { onMounted, defineProps, useTemplateRef } from "vue";
import createLineCoordinatesProps from "../../utils/createLineCoordinateProps.ts";
import { fromNullable, map, match, orElse } from "effect/Option";
import { createKeyframeFromCoordinatesList } from "../../utils/animationUtils.ts";

type TSupportedColors = 'light' | 'purple' | 'pink' | 'yellow' | 'orange' | 'red' | 'blue' | 'emerald';
type TLineCreatorProps = { lineId: number, lineColor: TSupportedColors };

const containerEl = useTemplateRef<SVGGElement>("containerRef");
const circlesListEl = useTemplateRef<SVGCircleElement[]>("animationCirclesRef");

const { lineId, lineColor } = defineProps<TLineCreatorProps>();
const currentLineData = LINES_CONFIG.find(line => line.id == lineId);

const createAnimation = (keyframe: Keyframe[]) => {
  if (!currentLineData || !circlesListEl.value) {
      return new Error(`Missing data to start line ${currentLineData?.id ?? ""} animation`);
  }

  circlesListEl.value.forEach((circle, i) => {
      const animationSettings: KeyframeEffectOptions = {
          delay: (currentLineData.timing * i),
          direction: (i % 2 ? "reverse" : "normal"),
          duration: (currentLineData.timing * currentLineData.trains),
          fill: "forwards",
          iterations: Infinity
      };
      const lineAnimation = new KeyframeEffect(circle, keyframe, animationSettings);
      const animation = new Animation(lineAnimation, document.timeline);
      const frameDuration = animation.effect?.getComputedTiming().duration;
      if (typeof frameDuration === 'number') animation.currentTime = frameDuration / 3;
      animation.play();
  });
}

onMounted(() => {
    const pathString = containerEl?.value?.querySelector(".js-linePath")?.getAttribute("d");
    return pipe(
        fromNullable(pathString),
        map(createLineCoordinatesProps),
        map(createKeyframeFromCoordinatesList),
        match({ onNone: console.error, onSome: createAnimation })
    );
});
</script>

<template>
    <g v-if="currentLineData" ref="containerRef" :style="`fill: var(--line-${lineColor})`">
        <slot />
        <circle ref="animationCirclesRef" v-for="(n, index) in currentLineData.trains" :key="index" cx="0" cy="0" r="5"
            class="u-newTrain js-newTrain" />
    </g>
</template>

<style scoped>
circle {
    transition: opacity .5s ease-out;
    fill: var(--background);
    opacity: 0;
}

.u-linePath {
    fill: unset;
    visibility: hidden;
}

.u-lineStroke {
    fill: inherit !important;
}
</style>