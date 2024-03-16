<script setup lang="ts">
import MainView from "@/components/MainView.vue";
import ContentBox from "@/components/ContentBox.vue";
</script>

<template>
	<div class="content-wrapper">
		<MainView
			logo="/img/temp/important.png"
			logoAlt="Team"
			text="team"
			current="team"
			cat="/img/temp/Untitled500_20240308193811.png"
		/>
		<ContentBox>
			<section class="team-container">
				<article class="member">
					<img
						src="/img/temp/Untitled500_20240308193811.png"
						alt="spoosh"
					/>
					<h1>Splosh</h1>
					<p>Creator of Fish</p>
				</article>
				<article class="member">
					<img
						src="/img/temp/Untitled500_20240308193811.png"
						alt="spoosh"
					/>
					<h1>Splosh 2</h1>
					<p>Creator of Cat</p>
				</article>
				<article class="member">
					<img
						src="/img/temp/Untitled500_20240308193811.png"
						alt="spoosh"
					/>
					<h1>zir</h1>
					<p>infamous</p>
				</article>
				<article class="member">
					<img
						src="/img/temp/Untitled500_20240308193811.png"
						alt="spoosh"
					/>
					<h1>insert text</h1>
					<p>Sample text</p>
				</article>
				<article class="member">
					<img src="/img/temp/image.jpg" alt="spoosh" />
					<h1>cat cat</h1>
					<p>kitty</p>
				</article>
				<article class="member">
					<img
						src="/img/temp/Untitled500_20240308193811.png"
						alt="spoosh"
					/>
					<h1>what</h1>
					<p>jealwfe</p>
				</article>
			</section>
		</ContentBox>
	</div>
</template>

<style lang="scss" scoped>
.team-container {
	display: grid;
	grid-template: 1fr 1fr / 1fr 1fr 1fr;
	gap: min(4em, 4%);
	padding: 1em;
	@media only screen and (max-width: 560px) {
	grid-template: 1fr 1fr 1fr / 1fr 1fr;
	}
}
.member {
	text-align: center;
	img {
		width: 100%;
		border-radius: 100%;
		border: 0.3rem black solid;
		background-color: #c7a4c4;
	}
	h1 {
		font-size: 1rem;
	}
}
</style>
