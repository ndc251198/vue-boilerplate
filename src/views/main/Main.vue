<template>
  <ndc-layout view="lHh lpR lff">
    <page-header></page-header>

    <side-nav></side-nav>

    <ndc-page-container>
      <router-view />
    </ndc-page-container>
  </ndc-layout>
</template>

<script lang="ts">
import Vue from "vue";
import NdcLayout from "@/controls/ndc-layout/NdcLayout.vue";
import NdcPageContainer from "@/controls/ndc-page/NdcPageContainer.vue";
import PageHeader from "@/components/commons/header/PageHeader.vue";
import SideNav from "@/components/commons/sideNav/SideNav.vue";

export default Vue.extend({
  components: {
    NdcLayout,
    NdcPageContainer,
    PageHeader,
    SideNav
  },
});
</script>