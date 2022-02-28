<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">Redeem Points</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse float-right" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" active-class="active" class="nav-link"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="/transactions"
              active-class="active"
              class="nav-link"
              >Transactions</RouterLink
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown dropstart">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              v-text="user.name"
            >
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a
                  href="javascript:void(0)"
                  class="dropdown-item"
                  @click.prevent="logout"
                  >Logout</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "../../stores/auth";
import Snackbar from "node-snackbar";

export default {
  name: "HeaderPartial",
  data() {
    const store = useAuthStore();
    return {
      store,
    };
  },
  computed: {
    user() {
      return this.store.user.user || null;
    },
  },
  methods: {
    logout() {
      this.store.logout();
      this.$router.push("/login");
      Snackbar.show({
        text: "User logged out successfully.",
        pos: "bottom-right",
      });
    },
  },
};
</script>
