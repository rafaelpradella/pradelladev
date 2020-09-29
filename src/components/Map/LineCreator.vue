<template>
    <g ref="lineCreator" :style="`fill:${colorVariable}`">
        <slot />
        <circle
            ref="animationCircle"
            v-for="(n,index) in lineData.trains"
            :key="index"
            cx="0" cy="0" r="5"
            class="u-newTrain js-newTrain"
        />
    </g>
</template>

<script>
import config from "~/components/Map/LinesConfig";
import PathToArray from "~/components/Map/PathToArray";

export default {
    data: function(){
        return{
            pathCoordinates: [],
            animationKeyframe: []
        }
    },

    props: {
        lineId: Number,
        colorVariable: String
    },

    computed: {
        lineData() {
            const self = this;
            const matchId = function(line){
                return line.id == self.lineId; 
            };

            return config.filter(matchId)[0];
        }
    },

    mounted(){
        const pathString = this.$refs.lineCreator.querySelector(".js-linePath").getAttribute("d");
        this.pathCoordinates = new PathToArray(pathString);

        this.pathCoordinates.forEach((segment, i) => {
            let isFirstOrLast = this.isFirstOrLast(this.pathCoordinates, i);
            this.animationKeyframe.push({ 
                easing: "cubic-bezier(.3,0,.3,1)",
                opacity: isFirstOrLast ? "0" : ".5",
                transform : `
                    translateX(${segment.x}px) 
                    translateY(${segment.y}px)
                `
            });  
        })

        this.createAnimation();
    },

    methods: {
        isFirstOrLast(list, order){
            return order == 0 || order == list.length -1;
        },

        createAnimation(){
            this.$refs.animationCircle.forEach((circle, index) => {
                let animationSettings = {
                    delay: (this.lineData.timing * index),
                    direction: (index % 2 ? "reverse" : "normal"),
                    duration: (this.lineData.timing * this.lineData.trains),
                    fill: "forwards",
                    iterations: Infinity
                };
                let lineAnimation =  new KeyframeEffect(circle, this.animationKeyframe, animationSettings);
                let animation = new Animation(lineAnimation, document.timeline);
                animation.currentTime = animation.effect.getComputedTiming().duration / 3;
                animation.play();
            })
        }
    }
}
</script>

<style scoped>
    circle{
        transition: opacity .5s ease-out;
        fill: var(--background);
        opacity: 0;
    }
    .u-linePath {
        fill: unset;
        visibility: hidden;
    }
    .u-lineStroke{ 
        fill: inherit!important;
    }
</style>