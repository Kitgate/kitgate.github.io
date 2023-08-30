<script setup lang="ts">
import { ref, computed } from "vue";
import MenuButton from "./MenuButton.vue";

const props = defineProps<{
	logo: string;
	logoAlt: string;
	current: string | undefined;
	text: string;
	background: string;
	cat: string;
    invertMenu?: boolean;
}>();
const backgroundUrl = computed(() => `url("${props.background}")`)
const menuOrder = computed(() => props.invertMenu ? "row-reverse" : "row")

</script>
<template>
	<main>
		<div class="title-box">
			<img
				:src="$props.logo"
				width="176"
				height="86"
				:alt="logoAlt"
			/>
		</div>
		<p class="tagline glow">A SILLY CAT RPG :3</p>
		<div class="divider"></div>
		<section class="main-content">
			<article class="main-article">
				<section class="cat-container">
					<img
						:src="cat"
						alt="Cat"
						width="79"
						height="92"
					/>
				</section>
				<section class="button-container glow">
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
			<TextBox class="text-box glow" :text="text"> </TextBox>
		</section>
	</main>
</template>
<style lang="scss">
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
}
.cat-container {
	width: 16rem;
	display: flex;
	@media only screen and (max-width: 1025px) {
		width: 14rem;
	}
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
	padding: 0.15rem 0;
	margin-bottom: 2rem;
	animation: expand 0.35s;
}
.title-box {
	display: flex;
	text-align: center;
	margin: 0.5rem auto;
	margin-top: 3.25rem;
	justify-content: center;
	width: 100%;
	img {
		width: 90%;
		height: auto;
		max-width: 600px;
	}
	animation: expand 0.35s;
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
	max-width: 40vw;
	.menu-button {
		width: 50%;
		@media only screen and (max-width: 480px) {
			width: 100%;
		}
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
	background-image: v-bind("backgroundUrl");
	background-size: auto 100vh;
	background-position: center;
	z-index: -1;
	background-blend-mode: multiply;
	background-color: #482254bf;
}

main::after {
	background-color: #48225480;
	width: 60%;
}
</style>
