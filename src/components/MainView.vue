<script setup lang="ts">
import { ref, computed } from "vue";
import MenuButton from "./MenuButton.vue";
import { useRoute } from "vue-router";

const props = defineProps<{
	logo: string;
	logoAlt: string;
	current: string | undefined;
	text: string;
	cat: string;
	invertMenu?: boolean;
}>();
const route = useRoute();
const menuOrder = computed(() => (props.invertMenu ? "row-reverse" : "row"));
</script>
<template>
	<main>
		<div class="title-box">
			<img :src="$props.logo" width="176" height="86" :alt="logoAlt" />
			<p class="tagline glow">A SILLY CAT RPG :3</p>
		</div>
		<div class="divider"></div>
		<section class="main-content">
			<section class="article-container">
				<article class="main-article glow">
					<section class="cat-container">
						<img :src="cat" alt="Cat" width="79" height="92" />
					</section>
					<section class="button-container">
						<MenuButton
							name="timeline"
							alt="Timeline"
							:active="current === 'timeline'"
						></MenuButton>
						<MenuButton
							name="cats"
							alt="The Cats"
							:active="current === 'cats'"
						></MenuButton>
						<MenuButton
							name="team"
							alt="Our Team"
							:active="current === 'team'"
						></MenuButton>
						<MenuButton
							name="contact"
							alt="Contact Us"
							:active="current === 'contact'"
						></MenuButton>
					</section>
				</article>
			</section>
			<TextBox class="text-box" :text="text"> </TextBox>
			<div class="back-container">
				<MenuButton
					v-if="current !== 'home'"
					name="back"
					alt="Home"
					:active="current === 'home'"
					link=""
					:dimensions="[50, 20]"
				></MenuButton>
			</div>
		</section>
		<slot />
	</main>
</template>
<style lang="scss">
.back-container {
	.menu-button {
		img {
			height: 100%;
			width: auto;
			margin-left: auto;
		}
		display: contents;
	}
	margin: 0.5rem;
	margin-bottom: 2rem;
	height: 3.5rem;
	display: flex;
}
.text-box {
	animation: expand 0.35s both;
}
main {
	height: 100vh;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
}
.glow {
	filter: drop-shadow(0 0 3px white);
}
.main-article {
	display: flex;
	margin: 0 1rem;
	flex-direction: v-bind("menuOrder");
}
.main-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	max-width: 40em;
	margin: 0 auto;
	padding: 0 1rem;
}
.cat-container {
	width: 16rem;
	display: flex;
	img {
		width: 100%;
		height: auto;
		margin-top: auto;
	}
	animation: slide 0.35s;
}
aside {
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 1rem;
	top: 1rem;
}
.tagline {
	color: white;
	text-align: center;
}
.title-box {
	display: flex;
	text-align: center;
	margin: 0.5rem auto;
	margin-top: 2.25rem;
	padding: 0.5rem 0;
	justify-content: center;
	width: 100%;
	img {
		width: 30em;
		height: auto;
		margin: 0 auto;
		max-width: 90%;
	}
	animation: expand 0.35s;
	flex-direction: column;
}
.divider {
	flex-grow: 1;
}
.button-container {
	display: flex;
	align-items: center;
	flex-grow: 1;
	flex-wrap: wrap;
	height: fit-content;
	margin-top: auto;
	.menu-button {
		width: 50%;
	}
	@media only screen and (max-width: 565px) {
		.menu-button {
			width: 100%;
		}
		max-width: 45vw;
	}
}
main::before,
main::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	width: 100%;
	height: 100%;
	background-image: var(--fg-background);
	background-size: cover;
	background-position: center;
	z-index: -1;
	background-blend-mode: multiply;
	background-color: #4822548f;
}

main::after {
	background-color: #48225450;
	clip-path: polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%);
	//width: var(--content-width);
}
</style>
