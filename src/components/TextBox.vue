<script setup lang="ts">
import { useTypewriter } from "@altgen/typer-composable";
import { ref } from "vue";
const props = defineProps<{
	text: string;
}>();
const strings = ref([props.text]);

const { text, currentString, isAtLastLetter } = useTypewriter(strings, { loop: false, typeInterval: 10 });
</script>

<template>
	<div class="textbox">
		<span :class="{ 'blinking-cursor': isAtLastLetter }">{{ text }}</span>
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>

.textbox {
	border-image-slice: 6 5 5 5 fill;
	border-image-width: 1rem 1rem 1rem 1rem;
	border-image-outset: 0px 0px 0px 0px;
	border-image-repeat: stretch stretch;
	border-image-source: url("/img/menu.png");
	border-style: solid;
	padding: 20px;
	color: white;
    width: 100%;
	display: flex;
	flex-direction: column;
    font-weight: bold;
    margin: 0 auto;
    height: 12rem;
	@media only screen and (max-width: 480px) {
		margin-bottom: 0;
	}
}

.textbox > span::after {
	content: "|";
	margin-left: 0.1em;
}
.blinking-cursor::after {
	animation: blink 1s steps(2) infinite;
}
@keyframes blink {
	0% {
		visibility: hidden;
	}
}
</style>
