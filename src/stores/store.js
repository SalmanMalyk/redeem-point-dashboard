import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "system",
  state: () => ({
    user: {},
    loggedIn: false,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
