<template>
  <div id="plan_ticker">
    <!--书签-->
    <mu-breadcrumb class="breadcrumb">
      <mu-breadcrumb-item href="javascript:void(0)">
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">机票预订</mu-breadcrumb-item>
    </mu-breadcrumb>
    <!--主干区域-->
    <div class="pt_main">
      <!--搜索框-->
      <mu-paper class="pt_search_box" :zDepth="2">
        <mu-text-field hintText="出发地"/>
        <span style="margin: 0 10px"> - </span>
        <mu-text-field hintText="目的地"/>
        <mu-date-picker hintText="出发日期"/>
        <mu-raised-button class="pt_search_btn" label="查询" primary/>
      </mu-paper>
      <!--机票条目-->
      <mu-paper class="pt_item">

      </mu-paper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlaneTicket'
  }
</script>

<style lang="scss">
  #plan_ticker {
    width: 100%;
    height: 100%;
    overflow: auto;
    // 主干区域
    .pt_main {
      width: 90%;
      margin: 0 auto;
      min-width: 1000px;
      // 搜索框
      .pt_search_box {
        width: 100%;
        padding: 15px 20px;
        .mu-text-field {
          margin: 0 10px;
        }
        // 查询按钮
        .pt_search_btn {
          float: right;
        }
      }
    }
  }
</style>
