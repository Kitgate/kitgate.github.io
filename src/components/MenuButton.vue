<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
	name: string;
	alt: string;
    active: boolean;
}>();
const clicked = ref(false);
</script>
<template>
	<RouterLink
		:to="`/${name}`"
		class="menu-button"
		@mousedown="clicked = true"
		@mouseup="clicked = false"
		@mouseleave="clicked = false"
	>
		<img
			:src="`/img/button/${clicked !== active ? 'on' : 'off'}/${name}.png`"
			:alt="alt"
			width="76"
			height="20"
			role="button"
		/>
	</RouterLink>
</template>
<style lang="scss">
.menu-button {
	display: inline-block;
	width: 12rem;
	background-size: cover;
	cursor: pointer;
	img {
		width: 100%;
		height: auto;
		transition: transform 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	&:hover img {
		transform: scale(107%);
	}
	&:active img {
		transform: scale(100%);
	}

	animation: expand 0.35s both;

	@for $i from 1 through 4 {
		&:nth-child(#{$i}) {
			animation-delay: ($i - 1) * 0.1s;
		}
	}
}
</style>
