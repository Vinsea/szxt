<template>
  <header class="szxt-header-wrapper">
    <div class="szxt-header-left">
      <el-button icon="el-icon-s-home">首页</el-button>
    </div>
    <div class="szxt-header-right">
      <span class="szxt-header-user">
        <span>用户昵称</span>
      </span>
      <span class="szxt-header-exit">退出</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'szxt-header',
};
</script>

<style scoped lang="less">
  .szxt-header-user {
    color: @color-menu-text;
    padding-right: 50px;
    border-right: 1px solid @border-color;
    line-height: 30px;
  }

  .szxt-header-exit {
    display: inline-block;
    width: @padding-main-right;
    text-align: center;
    cursor: pointer;
  }
</style>
