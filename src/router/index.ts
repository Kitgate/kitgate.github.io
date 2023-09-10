import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatsView from "../views/CatsView.vue";
import TeamView from "../views/TeamView.vue";
import TimelineView from "../views/TimelineView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Kitgate",
			component: HomeView,
			meta: {
				background: "/img/background/home.png",
			},
		},
		{
			path: "/cats",
			name: "Kitgate - The Cats",
			component: CatsView,
		},
		{
			path: "/team",
			name: "Kitgate - Our Team",
			component: TeamView,
		},
		{
			path: "/timeline",
			name: "Kitgate - Timeline",
			component: TimelineView,
			meta: {
				background: "/img/background/timeline.png",
			},
		},
		{
			path: "/contact",
			name: "Kitgate - Contact",
			component: ContactView,
		},
	],
});
router.beforeEach((to, from, next) => {
	// @ts-ignore
	document.title = to.name ?? "Kitgate";
	to.meta.previousBackground = from.meta.background;
	next();
});
export default router;
