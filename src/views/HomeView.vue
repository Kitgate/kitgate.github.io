<script setup lang="ts"></script>

<template>
	<main>
		<div class="title-box">
			<img src="/img/logo.png" width="176" height="86" />
		</div>
		<p class="tagline">2 cat 2 game</p>
		<div class="divider"></div>
		<section class="main-content">
			<section class="cat-container">
				<img src="/img/cat/m.png" alt="Cat" width="79" height="92" />
			</section>
			<TextBox text="Welcome message :3c"> </TextBox>

			<section class="button-container">
				<RouterLink to="/timeline" class="menu-button">
					<img src="/img/button/timeline.png" alt="Timline" width="76" height="20" role="button" />
				</RouterLink>
				<RouterLink to="/cats" class="menu-button">
					<img src="/img/button/cats.png" alt="The Cats" width="76" height="20" role="button" />
				</RouterLink>
				<RouterLink to="/team" class="menu-button">
					<img src="/img/button/team.png" alt="Our Team" width="76" height="20" role="button" />
				</RouterLink>
				<RouterLink to="/contact" class="menu-button">
					<img src="/img/button/contact.png" alt="Contact Us" width="76" height="20" role="button" />
				</RouterLink>
			</section>
		</section>
		<aside></aside>
		<footer>meow moem woem owm owem owem owem owme owem omwe ow meowm eowm</footer>
	</main>
</template>

<style lang="scss">
footer {
	width: 100%;
	background-color: dimgray;
	padding: 0.4rem 0.55rem 0.5rem;
	text-align: center;
	border-top: gray 4px solid;
}
main {
	height: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
}
.main-content {
	display: flex;
	justify-content: center;
	padding: 0 4rem;
	gap: 1rem;
}
.cat-container {
	width: 16rem;
	img {
		width: 100%;
		height: auto;
		position: absolute;
		bottom: 0;
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
}
.title-box {
	height: 30%;
	display: flex;
	text-align: center;
	margin: 0.5rem auto;
	justify-content: center;
	img {
		height: 100%;
		width: auto;
	}
	animation: expand 0.35s;
}
.divider {
	flex-grow: 1;
}
body::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	width: max(60%, calc(100% - 24rem));
	height: 100%;
	background-image: url("/img/background.png");

	box-shadow: inset 0px 0px 0px 6px #ffffff33;
	background-size: cover;
	background-position: center;
	filter: brightness(45%);
}
.button-container {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	align-items: center;
}
.menu-button {
	display: inline-block;
	width: 12rem;
	background-size: cover;
	cursor: pointer;
	img {
		width: 100%;
		height: auto;
	}
	filter: grayscale(100%);
	&:hover {
		filter: none;
	}
}
</style>
