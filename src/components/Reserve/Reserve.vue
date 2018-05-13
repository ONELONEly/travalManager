<template>
  <div id="reserve">
    <!--书签-->
    <mu-breadcrumb class="breadcrumb_qy">
      <mu-breadcrumb-item href="javascript:void(0)">
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">订单信息</mu-breadcrumb-item>
    </mu-breadcrumb>
    <!--主干区域-->
    <div class="reserve_main">
      <!--订单信息-->
      <mu-paper class="reserve_info_box" :zDepth="2">
        <!--标题-->
        <div class="reserve_info_title">订单信息</div>
        <!--内容-->
        <div class="reserve_content">订单信息</div>
      </mu-paper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reserve'
  }
</script>

<style lang="scss">
  #reserve {
    width: 100%;
    height: 100%;
    overflow: auto;
    // 主干区域
    .reserve_main {
      width: 90%;
      margin: 0 auto;
      min-width: 1000px;
      // 订单信息
      .reserve_info_box {
        width: 100%;
        padding: 15px 20px;
        .reserve_info_title {
          width: 100%;
          border-bottom: 1px gray solid;
        }
      }
    }
    // 书签
    .breadcrumb_qy {
      padding: 30px 50px;
      width: 100%;
      text-align: left;
      .mu-breadcrumb-item-link {
        color: white;
        margin: 10px;
      }
    }
  }
</style>
