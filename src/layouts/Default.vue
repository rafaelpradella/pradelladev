<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
:root,
:root[data-scheme="dark"] {
  --background: #000;
  --text: #E9E9E9;
  --link: #f5cc12;

  --map-ocean: #000441;
  --map-forests: #002506;
  
  --line-green: #82FC37;
  --line-red: #FF3A3A;
  --line-blue: #1769FF;
  --line-orange: #f86e23;
  --line-pink: #fa9082;
  --line-yellow: #f5cc12;
  --line-light: #827E7E;
  --line-emerald: #28D999;
  --line-purple: #992CAF;
}

:root[data-scheme="light"] {
  --background: #F1E9D4;
  --text: #333333;
  --link: #A5378B;

  --map-ocean: #A1CAEA;
  --map-forests: #B6E4BD;
  
  --line-green: #038245;
  --line-red: #C00C0C;
  --line-blue: #024999;
  --line-orange: #CE881E;
  --line-pink: #fa9082;
  --line-yellow: #F7C617;
  --line-light: #9C9A8C;
  --line-emerald: #14AD90;
  --line-purple: #A5378B;
}

:root{
  font-size: 16px;
}

*, *:before, *:after{
  box-sizing: border-box;
}

body{
  background-color: var(--background);
  color: var(--text);
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

h1{
  font-size: 2.5rem;
}

h2{
  font-size: 1.5rem;
}

p{
  font-size: 1.3rem;
}

a{
  color: var(--link);
  font-weight: 700;
  text-decoration: underline;
}

a:hover, a:active{
  opacity: .85;
}

a:visited{
  filter: saturate(25%);
}

@media(max-width: 720px){
  :root{
    font-size: 13px;
  }
  body{
    background-color: var(--map-ocean);
  }
}

@media(max-width: 360px){
  :root{
    font-size: 12px;
  }
}
</style>

