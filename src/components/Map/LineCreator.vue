<template>
    <g ref="lineCreator" :style="`fill:${colorVariable}`">
        <slot />
        <circle
            ref="animationCircle"
            v-for="(n,index) in lineData.trains"
            :key="index"
            cx="0" cy="0" r="6"
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

        this.pathCoordinates.forEach(segment => {
            this.animationKeyframe.push({ 
                easing: "cubic-bezier(.3,0,.3,1)",
                transform : `translateX(${segment.x}px) translateY(${segment.y}px)`
            });  
        })

        this.createAnimation();
    },

    methods: {
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
    
                animation.play();
            })
        }
    }
}
</script>

<style scoped>

    circle{
        fill: var(--background);
        opacity: .5;
    }
    .u-linePath {
        fill: unset;
        visibility: hidden;
    }
    .u-lineStroke{ 
        fill: inherit!important;
    }
</style>