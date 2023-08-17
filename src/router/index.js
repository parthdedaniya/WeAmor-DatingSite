import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/Home.vue"),
		},
		{
			path: "/user/:id",
			name: "user",
			component: () => import("../views/User.vue"),
		},
		{
			path: "/features",
			name: "features",
		},
		{
			path: "/pricing",
			name: "pricing",
		},
		{
			path: "/blogs",
			name: "blogs",
		},
		{
			path: "/howtouse",
			name: "howtouse",
		},
	],
});

export default router;
