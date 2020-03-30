<template>
	<Layout>
		<section id="start">
			<div class="u-col">
				<Map />
			</div>

			<div class="u-col">
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
export default {
  components: { Map, SocialLinks },
  metaInfo: {
    title: '[WIP] Rafael Pradella: Front-End Developer and UI Desiger',
    description: 'I´m a 25 years-old front-end developer and user interface designer, and this is my personal landing page'
  }
}
</script>

<style>
  section{ background-color: var(--background); overflow: hidden;}
  section#start{ background-color: var(--map-ocean); display: grid; grid-gap: 40px; grid-template-columns: 1fr 1fr; height: 90vh; align-items: center;}
  svg#map{ position: relative; left: -20%; width: 120%; max-width: 120%;}
  .u-col{ position: relative; display: inline-block; overflow: hidden; padding: 40px;}
</style>