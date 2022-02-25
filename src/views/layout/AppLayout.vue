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
  <slot />
  <FooterPartial />
</template>
