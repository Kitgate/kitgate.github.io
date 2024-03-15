<script setup lang="ts">
import MainView from "@/components/MainView.vue";
</script>

<template>
	<div class="content-wrapper">
		<MainView
			logo="/img/logo/timeline.png"
			logoAlt="Timeline"
			text="timeline"
			current="timeline"
			cat="/img/cat/b.png"
			invertMenu
		/>
		<section class="timeline-container">
			<article class="timeline-box">
				<div class="inner-box">
					<section class="timeline-section">
						<div>
							<h1>DEVELOPMENT</h1>
							<h2 class="special">current phase</h2>
							<h2>2022 - ????</h2>
							<p>meowmeo mwoemoe wmoewme owmeo mwe text here</p>
						</div>
						<img
							src="/img/timeline/computercat.png"
							alt="singular cat using computer"
						/>
					</section>
					<section class="timeline-section">
						<img
							src="/img/timeline/masscomputercat.png"
							alt="multiple cats using computer"
						/>
						<div>
							<h1>DEMO + KICKSTARTER</h1>
							<h2>???? - ????</h2>
							<p>me owmeom woemoew moewme owme omwe text here</p>
						</div>
					</section>
					<section class="timeline-section">
						<div>
							<h1>PUBLIC LAUNCH</h1>
							<h2>???? - ????</h2>
							<p>meow meomw oemo ewmo ewmeowm eomwe text here</p>
						</div>
						<img
							class="large"
							src="/img/timeline/cats.png"
							alt="cats along with one wielding a pickaxe"
						/>
						<div class="image-spacer"></div>
					</section>
				</div>
			</article>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.timeline-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(#c6a3c3, #dfbbd5);
	&::before,
	&::after {
		content: "";
		width: calc((100% - var(--content-width)) / 2);
		height: 100%;
		position: absolute;
		top: 0;
		background-color: #98739a;
	}
	&::before {
		left: 0;
	}
	&::after {
		right: 0;
	}
}
.timeline-box {
	background-color: #ecd2e8;
	padding: 1em;
	z-index: 1;
	width: calc(var(--content-width) - 2 * 2em);
	margin: 2em;
	margin-bottom: 3em;
	@media only screen and (max-width: 1366px) {
		width: calc(var(--content-width) + 4em);
	}
	@media only screen and (max-width: 1025px) {
		width: calc(100% - 8em);
	}
	@media only screen and (max-width: 810px) {
		width: calc(100% - 4em);
	}
	@media only screen and (max-width: 610px) {
		width: 100%;
	}
}
.inner-box {
	margin: 1em;
	padding: 1em 1.5em;
	border: 12px solid;
	border-image: linear-gradient(#e4c9e2ff, #e4c9e255) 1 100%;
	display: flex;
	flex-direction: column;
	gap: 1.5em;
	position: static;
	@media only screen and (max-width: 1366px) {
		font-size: 14px;
	}
	@media only screen and (max-width: 810px) {
		font-size: 11px;
	}
	@media only screen and (max-width: 610px) {
		font-size: 10px;
	}
}
.timeline-section {
	display: flex;
	justify-content: space-between;
	position: static;
	img {
		width: auto;
		height: 12em;
		@media only screen and (max-width: 810px) {
			height: 8em;
		}
		&.large {
			width: auto;
			height: 18em;
			position: absolute;
			bottom: -32px;
			right: 0;
		}
	}
	.image-spacer {
		height: 14em;
		width: 18em;
	}
	h1 {
		font-size: 2em;
	}
	h2.special {
		font-size: 1.2em;
		font-weight: bold;
	}
	h2 {
		font-weight: normal;
		margin-bottom: 0.5em;
		font-size: 1.2em;
	}
	p {
		margin: 1.2em 0 0;
		@media only screen and (max-width: 1366px) {
			font-size: 1.2em;
		}
	}
}
</style>
