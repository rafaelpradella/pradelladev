<script lang="ts" setup>
import { onMounted, useTemplateRef } from "vue";
import { createOffsetKeyframe } from "@utils/animationUtils.ts";
import { LINES_CONFIG } from "./LinesConfig.ts";

type TSupportedColors =
  | "light"
  | "purple"
  | "pink"
  | "yellow"
  | "orange"
  | "red"
  | "blue"
  | "emerald"
  | "green";
type TLineCreatorProps = { lineId: number; lineColor: TSupportedColors };

const animatedItensEl = useTemplateRef<SVGPathElement[]>("animationRef");
const { lineId, lineColor } = defineProps<TLineCreatorProps>();
const currentLineData = LINES_CONFIG.find((line) => line.id == lineId);
const lineColorVariable = `var(--line-${lineColor})`;

const createAnimation = (keyframe: Keyframe[]) => {
  if (!currentLineData || !animatedItensEl.value)
    return new Error(
      `Missing data to start line ${currentLineData?.id ?? ""} animation`
    );

  animatedItensEl.value.forEach((circle, i) => {
    const animationSettings: KeyframeEffectOptions = {
      delay: (currentLineData.duration / currentLineData.trains) * 2 * i,
      direction: i % 2 ? "reverse" : "normal",
      duration: currentLineData.duration,
      fill: "forwards",
      iterations: Infinity,
    };
    const lineAnimation = new KeyframeEffect(
      circle,
      keyframe,
      animationSettings
    );
    const animation = new Animation(lineAnimation, document.timeline);
    const frameDuration = animation.effect?.getComputedTiming().duration;
    if (typeof frameDuration === "number")
      animation.currentTime = frameDuration / 3;
    animation.play();
  });
};

onMounted(() => {
  if (!currentLineData) return;

  const offsetKeyframe = createOffsetKeyframe(currentLineData);
  return createAnimation(offsetKeyframe);
});
</script>

<template>
  <g class="lineAnimator" v-if="currentLineData" ref="containerRef">
    <slot />
    <circle ref="animationRef" v-for="(_, index) in currentLineData.trains" :key="index" cx="0" cy="0" r="5" />
  </g>
</template>

<style>
.lineAnimator {
  .u-lineStroke {
    filter: brightness(0.6);
    fill: v-bind(lineColorVariable);
  }

  circle {
    mix-blend-mode: plus-lighter;
    filter: blur(5px);
    fill: v-bind(lineColorVariable);
  }
}
</style>
