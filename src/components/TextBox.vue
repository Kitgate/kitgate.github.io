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
	border-image-source: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRFAAAA/7YA/+17AAAA/4gA/8MA/6M0/0oAAABVAAAAmVH5YAAAAAp0Uk5TAP////////8DAgWMNEYAAAB6SURBVHicY2DACQSxAgYGRiWsQIBBCLuEIlACm0kgCUVjLEBogCWcVLBJOKlQUwKn5a4hVHMVdqNcQ3BLkG6UWwo2CbcUMizHKVEajk2iNJyhLB2bRFk6GRI4/UG6BBVdNeQkyrGANKBEGlaQztCOXaKSgQObSeXlDQDjRfuP7yH8FQAAAABJRU5ErkJggg==");
	border-style: solid;
	padding: 20px;
	color: white;
	width: 40em;
	display: flex;
	flex-direction: column;
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
