import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/user/:id",
			name: "user",
			component: User,
		},
	],
});

export default router;
