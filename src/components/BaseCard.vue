<template>
  <div class="szxt-card">
    <div class="szxt-card-header">
      <h2 class="szxt-card-title">{{title}}</h2>
      <slot name="header"></slot>
    </div>
    <div class="szxt-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-card',
  props: {
    title: String,
  },
};
</script>

<style scoped lang="less">
  @padding: 25px;

  .szxt-card {
    background-color: #fff;
    overflow: hidden;
  }

  .szxt-card-body {
    padding: @padding;
  }

  .szxt-card-header {
    height: @height-card-header;
    border-bottom: 1px solid @border-color;
    padding: 0 @padding;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .szxt-card-title {
    line-height: @height-card-header;
    color: #666;
    font-size: 20px;
    font-weight: normal;
  }
</style>
