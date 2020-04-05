<template>
    <ul>
        <li>
            <a class="u-github" href="https://github.com/rafaelpradella" title="My GitHub profile" target="_blank" rel="noopener">
                <Icons id="github" :is-presentation="false" />
            </a>
        </li>
        <li>
            <a class="u-codesandbox" href="https://codesandbox.io/u/rafaelpradella" title="My CodeSa profilendbox" target="_blank" rel="noopener">
                <Icons id="codesandbox" :is-presentation="false" />
            </a>
        </li>
        <li>
            <a class="u-linkedin" href="https://www.linkedin.com/in/rafael-pradella-14745142/" title="My Linked profileIn" target="_blank" rel="noopener">
                <Icons id="linkedin" :is-presentation="false" />
            </a>
        </li>
    </ul>
</template>

<script>
import Icons from "~/components/Icons.vue";
export default {
    components: { Icons },
    data: function(){
        return{}
    }
}
</script>

<style lang="scss" scoped >
    ul{ display: block; padding: 0;}
    li{ display: inline-block; list-style: none; margin-right: 15px;}
    svg{ width: 24px; fill: #222;}

    a{ position: relative; border-radius: 100%; display: flex; align-items: center; justify-content: center; width: 48px; height: 48px;
        &:before{ position: absolute; top: -6px; left: -6px; bottom: -6px; right: -6px; border-radius: 100%; border: 2px solid black; border-color: inherit; content: ""; opacity: 0; transition: opacity .3s ease-in-out;}
        &:hover, &:active{ opacity: .8;}
        &:focus{
            &:before{ opacity: 1;}
        }
    }
    .u-github{ background-color: var(--line-light); border-color: var(--line-light);}
    .u-codesandbox{ background-color: var(--line-yellow);  border-color: var(--line-yellow);}
    .u-linkedin{ background-color: var(--line-blue);  border-color: var(--line-blue);}

    @media(prefers-color-scheme: light){
        .u-linkedin svg{ fill: #fff; }
    }
</style>