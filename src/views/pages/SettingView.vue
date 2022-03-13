<template>
  <AppLayout>
    <div class="row mb-4">
      <h4 class="col-md-9">Settings</h4>
    </div>
    <div class="row">
      <div class="col-md-12 mb-3">
        <label class="form-label" for="name"
          >Company Name:<span class="text-danger">*</span></label
        >
        <input type="text" id="name" class="form-control" v-model="user.name" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label" for="percentage"
          >Point Percentage:<span class="text-danger">*</span></label
        >
        <input
          type="number"
          id="percentage"
          class="form-control"
          v-model="user.percentage_per_sale"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label" for="value"
          >Point Value <small>(Money)</small>:<span class="text-danger"
            >*</span
          ></label
        >
        <input
          type="number"
          id="value"
          class="form-control"
          v-model="user.price_per_point"
        />
      </div>
      <div class="col-md-12 mt-5 text-center">
        <button
          type="button"
          class="btn btn-primary"
          @click.prevent="updateChanges"
        >
          Update Changes
        </button>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../layout/AppLayout.vue";
import Snackbar from "node-snackbar";
import { useAuthStore } from "../../stores/auth";
import userService from "../../services/user.service";

export default {
  components: {
    AppLayout,
  },
  data() {
    const store = useAuthStore();
    return {
      store,
    };
  },
  computed: {
    user() {
      return this.store.user.user;
    },
  },
  methods: {
    updateChanges() {
      userService.updateUser(this.user);
    },
  },
};
</script>
