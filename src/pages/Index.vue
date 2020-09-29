<template>
	<Layout>
		<!--header>
			<ColorSelector />
		</header-->
		<section id="start">
			<div class="u-col u-col--map">
				<Map />
			</div>

			<div class="u-col u-col--content">
				<h1>Rafael Pradella</h1>

				<p>A brazilian front-end developer that loves design + coding</p>
				<p> Currently working at <a href="https://www.cuponomia.com.br" title="My current employer" target="_blank" rel="noopener">Cuponomia</a></p>
				<social-links />
			</div>
		</section>

	</Layout>
</template>

<script>
import Map from '~/components/Map/Map.vue'
import SocialLinks from '~/components/SocialLinks.vue'
import ColorSelector from '~/components/ColorSelector.vue'

export default {
	components: { Map, SocialLinks, ColorSelector },
  
	metaInfo: {
		title: 'Rafael Pradella: Front-End Developer and UI Desiger',
		description: 'I´m a 26 years-old front-end developer and user interface designer, and this is my personal landing page'
	},

	mounted() {
		if(!'KeyframeEffect' in window){
			const AnimationPolyfill = require('web-animations-js/web-animations-next-lite.min.js');
		}

	}
}
</script>

<style lang="scss">
	h1{ margin-bottom: 1rem;}
	p{ line-height: 1.7em; margin: 0;}
	section{ background-color: var(--background); overflow: hidden;}
	section#start{ background-color: var(--map-ocean); display: grid; grid-gap: 40px; grid-template-columns: 1fr 1fr; height: 100vh; align-items: center;}
	svg#map{ position: relative; left: -20%; width: 120%; max-width: 120%;}
	.u-col{ position: relative; display: inline-block;}
	.u-col--map{ overflow: hidden;}

	@media(max-width: 720px){
		h1{ margin-top: 0;}
		section#start{ grid-gap: 0px; grid-template-rows: 1.1fr .9fr; grid-template-columns: unset; min-height: 90vh; height: 100%;}
		svg#map{ position: absolute; left: unset; bottom: -20px; transform: rotate(90deg) translateY(25vw); width: 150%; max-width: unset;}
		.u-col{ height: 100%;}
		.u-col--map{ overflow: visible;}
		.u-col--content{ padding: 0 20px; height: auto;}
	}
</style>