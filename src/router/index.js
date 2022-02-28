import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const DEFAULT_TITLE = "Redeem Points";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Homepage",
        requiresAuth: true,
      },
    },
    {
      path: "/transactions",
      name: "transactions",
      component: () => import("../views/pages/TransactionsView.vue"),
      meta: {
        title: "Transcations",
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "Login",
      },
      component: () => import("../views/auth/LoginView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authRequired = to.meta.requiresAuth || false;
  const loggedIn = localStorage.getItem("user");

  // meta
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = `${nearestWithTitle.meta.title} | ${DEFAULT_TITLE}`;
  }

  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
