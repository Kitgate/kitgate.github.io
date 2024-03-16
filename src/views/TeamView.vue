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
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	margin: 0 auto;
	justify-content: space-around;
}
.member {
	width: 12rem;
	@media only screen and (max-width: 560px) {
		width: 9rem;
	}
	text-align: center;
	img {
		width: 100%;
		border-radius: 100%;
		border: 6px black solid;
		background-color: #c7a4c4;
	}
	h1 {
		font-size: 1rem;
	}
}
</style>
