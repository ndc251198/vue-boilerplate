<template>
  <ndc-header elevated class="bg-primary text-white">
    <ndc-toolbar>
      <ndc-btn dense flat round icon="menu" @click="left = !left" />

      <ndc-toolbar-title>
        
      </ndc-toolbar-title>
    </ndc-toolbar>
  </ndc-header>
</template>
<script lang="ts">
import Vue from "vue";
import NdcHeader from "@/controls/ndc-header/NdcHeader.vue";
import NdcToolbar from "@/controls/ndc-toolbar/NdcToolbar.vue";
import NdcToolbarTitle from "@/controls/ndc-toolbar/NdcToolbarTitle.vue";
export default Vue.extend({
  name: 'page-header',

  components: {
    NdcHeader,
    NdcToolbar,
    NdcToolbarTitle
  },

  data() {
    return {
      left: true
    }
  }
});
</script>