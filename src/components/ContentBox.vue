<template>
	<section class="content-container">
		<article class="content-box">
			<div class="inner-box">
				<slot />
			</div>
		</article>
	</section>
</template>

<style lang="scss" scoped>
.content-container {
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
.content-box {
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
</style>