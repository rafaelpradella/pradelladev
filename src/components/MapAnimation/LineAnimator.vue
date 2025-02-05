<script lang="ts" setup>
import { /* onMounted, */ useTemplateRef } from "vue";
//import { pipe } from "effect";
//import { fromNullable, map, match } from "effect/Option";

//import { logPipe } from "@utils/debugUtils.ts";
//import { createKeyframeFromCoordinatesList } from "@utils/animationUtils.ts";
//import { splitPathBySegments } from "@utils/svgUtils.ts";
import { LINES_CONFIG } from "./LinesConfig.ts";

type TSupportedColors = 'light' | 'purple' | 'pink' | 'yellow' | 'orange' | 'red' | 'blue' | 'emerald';
type TLineCreatorProps = { lineId: number, lineColor: TSupportedColors };

const containerEl = useTemplateRef<SVGGElement>("containerRef");
const circlesListEl = useTemplateRef<SVGCircleElement[]>("animationCirclesRef");

const { lineId, lineColor } = defineProps<TLineCreatorProps>();
const currentLineData = LINES_CONFIG.find(line => line.id == lineId);
const lineColorVariable = `var(--line-${lineColor})`;

/* const createAnimation = (keyframe: Keyframe[]) => {
    if (!currentLineData || !circlesListEl.value)
        return new Error(`Missing data to start line ${currentLineData?.id ?? ""} animation`);

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
        console.log({ lineAnimation, animation })
        const frameDuration = animation.effect?.getComputedTiming().duration;
        if (typeof frameDuration === 'number') animation.currentTime = frameDuration / 3;
        animation.play();
    });
}

onMounted(() => {
    const pathCoordinatesOption = fromNullable(containerEl?.value?.querySelector(".js-linePath")?.getAttribute("d"));
    return pipe(
        pathCoordinatesOption,
        logPipe('start'),
        map(splitPathBySegments),
        logPipe('split'),
        map(createKeyframeFromCoordinatesList),
        match({ onNone: console.error, onSome: createAnimation })
    );
}); */
</script>

<template>
    <g class="lineAnimator" v-if="currentLineData" ref="containerRef">
        <slot />
        <circle ref="animationCirclesRef" v-for="(_, index) in currentLineData.trains" :key="index" cx="0" cy="0" r="5"
            class="u-newTrain js-newTrain" />
    </g>
</template>
<style>

.lineAnimator {
    circle {
        filter: blur(3px);
        fill: var(--background);
    }

    .u-lineStroke {
        fill: v-bind(lineColorVariable);
    }
}
</style>