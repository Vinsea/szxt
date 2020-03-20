<template>
  <div class="szxt-breadcrumb-wrapper">
    <div class="szxt-breadcrumb">
      <span class="szxt-breadcrumb-item">
        <span class="szxt-breadcrumb-item__inner">主页</span> <i class="el-icon-arrow-right"></i>
      </span>
      <span class="szxt-breadcrumb-item">
        <span class="szxt-breadcrumb-item__inner">课程管理</span> <i class="el-icon-arrow-right"></i>
      </span>
    </div>
    <div class="szxt-breadcrumb-btn">
      <el-button icon="el-icon-refresh">刷新</el-button>
      <el-button icon="el-icon-arrow-left">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'szxt-breadcrumb',
};
</script>
<style scoped lang="less">
  .szxt-breadcrumb-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 @padding-main-right 0 @padding-main-left;
  }

  .szxt-breadcrumb {
    line-height: 24px;
    padding-left: 8px;
    border-left: 5px solid @color-primary;
  }

  .szxt-breadcrumb-item__inner {
    color: #a09c9b;
    cursor: pointer;
    transition: color .3s;

    &:hover {
      color: @color-primary;
    }
  }

  .szxt-breadcrumb-item {
    font-size: 20px;

    padding-right: 10px;

    .el-icon-arrow-right {
      vertical-align: middle;
    }

    &:last-child {
      .el-icon-arrow-right {
        display: none;
      }

      .szxt-breadcrumb-item__inner {
        cursor: text;

        &:hover {
          color: currentColor;
        }
      }
    }
  }

</style>
