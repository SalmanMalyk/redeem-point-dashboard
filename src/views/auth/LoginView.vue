<template>
  <div class="container">
    <div class="col-md-6 mx-auto mt-5">
      <div class="card card-body">
        <Form @submit="handleLogin" :validation-schema="schema">
          <div class="form-group">
            <label for="username">Email</label>
            <Field name="email" type="text" class="form-control mb-1" />
            <ErrorMessage name="email" class="text-danger" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <Field name="password" type="password" class="form-control mb-1" />
            <ErrorMessage name="password" class="text-danger" />
          </div>
          <div class="form-group mt-3">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              &nbsp;
              <span>Login</span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "../../stores/auth";
import Snackbar from "node-snackbar";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required"),
    });

    const store = useAuthStore();

    return {
      loading: false,
      message: "",
      schema,
      store,
    };
  },
  computed: {
    loggedIn() {
      return this.store.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      // call store action
      this.store.login(user).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          if (error.response) {
            Snackbar.show({
              text: this.message,
              pos: "bottom-right"
            });
          }
        }
      );
    },
  },
};
</script>
