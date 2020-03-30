<template>
    <ul>
        <li><a class="u-github" href="https://github.com/rafaelpradella" title="Meu perfil no GitHub" target="_blank" rel="noopener"></a></li>
        <li><a class="u-codesandbox" href="https://codesandbox.io/u/rafaelpradella" title="Meu perfil no CodeSandbox" target="_blank" rel="noopener"></a></li>
        <li><a class="u-linkedin" href="https://www.linkedin.com/in/rafael-pradella-14745142/" title="Meu perfil no LinkedIn" target="_blank" rel="noopener"></a></li>
    </ul>
</template>

<script>

export default {
    data: function(){
        return{}
    }
}
</script>

<style style="less" scoped>
    ul{ display: block; padding: 0;}
    li{ display: inline-block; list-style: none; margin-right: 15px;}
    a{ border-radius: 100%; display: inline-block; fill: var(--text); width: 48px; height: 48px;}
    a:hover, a:active{ opacity: .8;}
    .u-github{ background-color: var(--line-light);}
    .u-codesandbox{ background-color: var(--line-yellow);}
    .u-linkedin{ background-color: var(--line-blue);}
</style>