import { defineStore } from "pinia";
import AuthService from "../services/auth-service";
import Snackbar from "node-snackbar";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const useStore = defineStore({
  id: "system",
  state: () => initialState,
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async login(user) {
      return AuthService.login(user).then(
        (user) => {
          this.status.loggedIn = true;
          this.status.user = user;
          Promise.resolve(user);
        },
        (error) => {
          if (error.response) {
            Snackbar.show({
              text: error.response.message,
            });
            this.status.loggedIn = false;
            this.status.user = null;
            return Promise.reject(error);
          }
        }
      );
    },
    async logout() {
      this.status.loggedIn = false;
      this.status.user = null;
      Snackbar.show({
        text: "User logged out successfully!",
      });
      AuthService.logout();
    },
  },
});
