import { defineStore } from "pinia";
import AuthService from "../services/auth-service";

const user = JSON.parse(localStorage.getItem("user"));

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    loggedIn: user ? true : false,
    user: user ? user : null,
  }),
  // actions
  actions: {
    async login(user) {
      await AuthService.login(user).then(
        (user) => {
          this.loggedIn = true;
          this.user = user;
          return Promise.resolve(user);
        },
        (error) => {
          this.loggedIn = false;
          this.user = null;
          return Promise.reject(error);
        }
      );
    },
    async logout() {
      this.status.loggedIn = false;
      this.status.user = null;
      AuthService.logout();
    },
  },
});
