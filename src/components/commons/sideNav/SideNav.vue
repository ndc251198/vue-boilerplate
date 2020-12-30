<template>
  <ndc-drawer show-if-above v-model="left" side="left">
    <!-- drawer content -->
  </ndc-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import NdcDrawer from "@/controls/ndc-drawer/NdcDrawer.vue";
export default Vue.extend({
  name: "side-nav",

  components: {
    NdcDrawer
  },

  data() {
    return {
      left: true,
    };
  },
});
</script>