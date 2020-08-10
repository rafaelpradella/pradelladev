<template>
    <button type="button" title="Change color scheme" v-on:click="fireAlert('hi')">
        <Icons id="codesandbox" :is-presentation="false" />
        <Icons id="gitHub" :is-presentation="false" />
    </button>
    
</template>

<script>
import Icons from "~/components/Icons.vue";
export default {
    components: { Icons },
    data: function(){
        return{
            isDarkMode,
            buttonTitle
        }
    },

     methods: {
        fireAlert(string){
            alert(string);
        },
     }
}
</script>

<style lang="scss">
    
</style>