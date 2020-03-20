<template>
  <div class="szxt-home">

    <base-card title="汇总数据">
      <template #header>
        <div class="szxt-tabs">
          <div class="szxt-tab-item is-active">总计</div>
          <div class="szxt-tab-item">今天</div>
          <div class="szxt-tab-item">昨天</div>
        </div>
      </template>
      <el-row :gutter="gutter" type="flex" justify="space-around">
        <el-col :span="4" v-for="i in 5" :key="i+1">
          <div style="height: 150px;width: 100%;background-color: #58A3F7;border-radius: 15px">{{i}}</div>
        </el-col>
      </el-row>
    </base-card>

    <el-row :gutter="gutter" type="flex" justify="space-between">
      <el-col :span="12">
        <base-card title="待办事项">
          <span>认证审核</span>
        </base-card>
      </el-col>

      <el-col :span="12">
        <base-card title="快捷入口">
          <span>认证审核</span>
        </base-card>
      </el-col>
    </el-row>

    <el-row :gutter="gutter" type="flex" justify="space-between">
      <el-col :span="12">
        <base-card title="播放统计">
          <template #header>
            <el-date-picker
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </template>
          <div ref="statistics" style="height: 450px;width: 100%"></div>
        </base-card>
      </el-col>

      <el-col :span="12">
        <base-card title="播放排行">
          <template #header>
            <el-row type="flex" align="middle">
              <div class="szxt-tabs" style="margin-right: 20px">
                <div class="szxt-tab-item is-active">总计</div>
                <div class="szxt-tab-item">今天</div>
                <div class="szxt-tab-item">昨天</div>
              </div>
              <el-date-picker
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-row>
          </template>
          <span>认证审核</span>
        </base-card>
      </el-col>
    </el-row>


    <el-row :gutter="gutter" type="flex" justify="space-between" v-for="i in 4" :key="i">
      <el-col :span="12">
        <base-card title="播放统计">
          <span>认证审核</span>
        </base-card>
      </el-col>

      <el-col :span="12">
        <base-card title="播放排行">
          <span>认证审核</span>
        </base-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
export default {
  name: 'home',
  data() {
    return {};
  },
  created() {
    this.gutter = 25;
  },
  mounted() {
    const myChart = echarts.init(this.$refs.statistics);
    myChart.setOption(
      {
        grid: {
          top: 30,
          bottom: 30,
          left: 30,
          right: 30,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed',
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          symbol: 'none',
          areaStyle: {
            normal: {
              color: '#fb6260',
              opacity: 0.2,
            },
          },
          itemStyle: {
            normal: {
              color: '#8cd5c2',
              lineStyle: {
                color: '#fb6260',
              },
            },
          },
        }],
      },
    );
  },
};
</script>

<style scoped lang="less">
  .szxt-home .szxt-card {
    margin-bottom: 25px;
  }
</style>
