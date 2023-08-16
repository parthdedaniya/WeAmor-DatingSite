import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
	state: () => ({
		users: [],
		currUser: {},
	}),
	actions: {},
});
