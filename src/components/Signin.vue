<template>
  <main class="form-signin">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput" class="text-dark">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword" class="text-dark">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-success text-uppercase" type="submit">
        Sign in
      </button>
    </form>
  </main>
</template>
