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
			name: "home",
			component: HomeView,
		},
		{
			path: "/cats",
			name: "cats",
			component: CatsView,
		},
		{
			path: "/team",
			name: "team",
			component: TeamView,
		},
		{
			path: "/timeline",
			name: "timeline",
			component: TimelineView,
		},
		{
			path: "/contact",
			name: "contact",
			component: ContactView,
		},
	],
});

export default router;
