<template>
  <div id="app">
    <szxt-nav></szxt-nav>
    <div class="szxt-main-wrapper">
      <szxt-header></szxt-header>
      <szxt-breadcrumb></szxt-breadcrumb>
      <router-view class="szxt-main"/>
    </div>
  </div>
</template>

<script>
import SzxtNav from '@c/layout/SzxtNav';
import SzxtHeader from '@c/layout/SzxtHeader';
import SzxtBreadcrumb from '@c/layout/SzxtBreadcrumb';

export default {
  name: 'app',
  components: {
    SzxtNav,
    SzxtHeader,
    SzxtBreadcrumb,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less">
</style>
