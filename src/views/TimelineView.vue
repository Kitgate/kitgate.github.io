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
			<div class="timeline-content"></div>
		</section>
	</div>
</template>

<style lang="scss">
.timeline-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #eacfe7;
}
.timeline-content {
	padding: 1rem;
	height: 1000rem;
	width: var(--content-width);
	margin: 0 auto;
	background-color: #e1c4dd;
}
</style>
