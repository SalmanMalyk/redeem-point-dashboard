<script>
import HeaderPartial from "../../components/partials/HeaderPartial.vue";
import FooterPartial from "../../components/partials/FooterPartial.vue";

export default {
  components: {
    HeaderPartial,
    FooterPartial,
  },
};
</script>

<template>
  <HeaderPartial />
  <div class="container mt-4">
    <slot />
  </div>
  <FooterPartial />
</template>
