<template>
  <div class="szxt-nav-wrapper">
    <div class="szxt-logo">
      <h1 class="szxt-logo-text">思正学堂</h1>
    </div>
    <el-menu
      default-active="kcgl-kcgl"
      class="szxt-nav">
      <el-submenu index="kcgl">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>课程管理</span>
        </template>
        <el-menu-item index="kcgl-kcgl">课程管理</el-menu-item>
        <el-menu-item index="kcgl-bjgl">班级管理</el-menu-item>
        <el-menu-item index="kcgl-zyjl">作业记录</el-menu-item>
      </el-submenu>
      <el-submenu index="rygl">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item index="rygl-jsgl">教师管理</el-menu-item>
        <el-menu-item index="rygl-xsgl">学生管理</el-menu-item>
        <el-menu-item index="rygl-zhgl">账号管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'szxt-nav',
};
</script>
