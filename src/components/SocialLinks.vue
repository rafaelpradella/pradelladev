<script setup>
import Icons from "@components/Icons.vue";
</script>

<template>
	<ul>
		<li>
			<a class="u-github" href="https://github.com/rafaelpradella" title="My GitHub profile" target="_blank"
				rel="noopener">
				<Icons id="github" :isPresentation="false" iconLabel="GitHub" />
			</a>
		</li>
		<li>
			<a class="u-codesandbox" href="https://codesandbox.io/u/rafaelpradella" title="My CodeSandbox profile"
				target="_blank" rel="noopener">
				<Icons id="codesandbox" :isPresentation="false" iconLabel="CodeSandbox" />
			</a>
		</li>
		<li>
			<a class="u-linkedin" href="https://www.linkedin.com/in/rafaelpradella/" title="My LinkedIn profile"
				target="_blank" rel="noopener">
				<Icons id="linkedin" :isPresentation="false" iconLabel="LinkedIn" />
			</a>
		</li>
		<li>
			<a class="u-button" href="/resume.pdf" title="Latest Resume (PDF)" target="_blank" rel="noopener">Resume</a>
		</li>

	</ul>
</template>

<style>
:root[data-scheme="light"] {
	.u-github {
		background-color: var(--text);

		svg {
			fill: var(--background);
		}
	}

	.u-linkedin svg {
		fill: #fff;
	}
}
</style>

<style scoped>
ul {
	display: flex;
	margin-top: 2rem;
	padding: 0;
}

li {
	display: inline-block;
	list-style: none;
	margin-right: 15px;
}

svg {
	width: 24px;
	fill: #222;
}

a {
	position: relative;
	background-color: var(--background);
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	fill: var(--text);
	width: 48px;
	height: 48px;

	svg {
		fill: var(--text);
	}

	&:before {
		position: absolute;
		top: -6px;
		left: -6px;
		bottom: -6px;
		right: -6px;
		border-radius: 100%;
		border: 2px solid var(--text);
		border-color: inherit;
		content: "";
		opacity: 0;
		transition: opacity .3s ease-in-out;
	}

	&:hover,
	&:active {
		opacity: .8;
	}

	&:focus {
		outline: none;

		&:before {
			opacity: 1;
		}
	}
}

.u-button {
	background-color: var(--link);
	border-radius: 48px;
	color: var(--background);
	font-size: 1.1em;
	padding: 0 20px;
	text-decoration: none;
	width: auto;

	&:before {
		border-color: var(--link);
		border-radius: 48px;
	}
}
</style>