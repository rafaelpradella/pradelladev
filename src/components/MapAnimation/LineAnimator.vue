<script lang="ts" setup>
import { flow, pipe } from "effect";
import { onMounted, useTemplateRef } from "vue";
import { fromNullable, map, match } from "effect/Option";

import { logPipe } from "@utils/debugUtils.ts";
import { createKeyframeFromCoordinatesList } from "@utils/animationUtils.ts";
import { splitPathBySegments } from "@utils/svgUtils.ts";
import { LINES_CONFIG } from "./LinesConfig.ts";

type TSupportedColors = 'light' | 'purple' | 'pink' | 'yellow' | 'orange' | 'red' | 'blue' | 'emerald';
type TLineCreatorProps = { lineId: number, lineColor: TSupportedColors };

const containerEl = useTemplateRef<SVGGElement>("containerRef");
const circlesListEl = useTemplateRef<SVGCircleElement[]>("animationCirclesRef");

const { lineId, lineColor } = defineProps<TLineCreatorProps>();
const currentLineData = LINES_CONFIG.find(line => line.id == lineId);
const lineColorVariable = `var(--line-${lineColor})`;

const createAnimation = (keyframe: Keyframe[]) => {
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
        logPipe('keyframe'),
        match({ onNone: console.error, onSome: createAnimation })
    );
});
</script>

<template>
    <g class="lineAnimator" v-if="currentLineData" ref="containerRef">
        <slot />
        <circle ref="animationCirclesRef" v-for="(_, index) in currentLineData.trains" :key="index" cx="0" cy="0" r="5"
            class="u-newTrain js-newTrain" />
    </g>
</template>
<style>
/* @keyframes paths {
    0% { offset: path("M286.057 313.635L321.261 370.664") 0%; }
    25% { offset: path("M286.057 313.635L321.261 370.664") 100%;}
    25.01% { offset: path("M321.261 370.664H355.056") 0%; }
    50% { offset: path("M321.261 370.664H355.056") 100%;}
    50.01% { offset: path("M355.056 370.664H428.279") 0%; }
    75% { offset: path("M355.056 370.664H428.279") 100%;}
    75.01% { offset: path("M428.279 370.664H481.084") 0%; }
    100% { offset: path("M428.279 370.664H481.084") 100%;}
} */

.lineAnimator {
    circle {
        fill: var(--background);
        /* animation: paths 30s cubic-bezier(.3,0,.3,1) forwards infinite;
        fill: var(--background); */
        opacity: 1;
    }

    .u-lineStroke {
        fill: v-bind(lineColorVariable);
    }
}
</style>
<!-- 
<script>
// Web Animation API Keyframes version
const paths = [
    "M286.057 313.635L321.261 370.664",
    "M321.261 370.664H355.056",
    "M355.056 370.664H428.279",
    "M428.279 370.664H481.084"
];

const keyframes = paths.flatMap((path, index) => {
    const segmentSize = 1 / paths.length;
    const startOffset = index * segmentSize;
    const endOffset = (index + 1) * segmentSize;
    
    return [
        {
            offset: startOffset,
            offsetPath: `path("${path}")`,
            offsetDistance: "0%"
        },
        {
            offset: endOffset,
            offsetPath: `path("${path}")`,
            offsetDistance: "100%"
        }
    ];
});
</script>
<style>
.lineAnimator {
    circle {
        fill: var(--background);
        animation: paths 30s cubic-bezier(.3,0,.3,1) forwards infinite;
        fill: var(--background);
        opacity: 1;
    }

    .u-lineStroke {
        fill: v-bind(lineColorVariable);
    }
}
</style> -->