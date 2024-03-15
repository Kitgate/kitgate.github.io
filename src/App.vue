<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
let currentBackground = ref(route.meta.background);
let currentForeground = ref(route.meta.background);
</script>

<template>
	<router-view v-slot="{ Component, route: _route }">
		<div
			class="main-container"
			:style="{
				'--background': `url(${currentBackground})`,
				'--fg-background': `url(${currentForeground})`,
			}"
		>
			<transition
				name="kk"
				mode="out-in"
				@before-enter="
					currentBackground = route.meta.previousBackground;
					currentForeground = route.meta.background;
				"
				@before-leave="
					currentBackground = route.meta.previousBackground;
					currentForeground = route.meta.background;
				"
				@after-enter="currentBackground = route.meta.background"
			>
				<component :is="Component" />
			</transition>
		</div>
	</router-view>
</template>

<style scoped></style>
