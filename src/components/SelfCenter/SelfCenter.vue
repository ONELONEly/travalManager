<template>
  <div id="self">
    <mu-breadcrumb class="self_breadcrumb">
      <mu-breadcrumb-item href="/">
        <mu-icon value="home" :size="16"/>
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="/">个人中心</mu-breadcrumb-item>
    </mu-breadcrumb>
    <!--主体内容盒子-->
    <div class="self_box">
      <div class="self_muse">
        <!--右侧菜单-->
        <mu-paper class="self_right_muse">
          <mu-menu>
            <mu-menu-item title="个人信息"/>
            <mu-menu-item title="差旅标准"/>
            <mu-menu-item title=" 常用旅客"/>
            <mu-menu-item title=" 常用地址"/>
          </mu-menu>
        </mu-paper>
      </div>
      <!--左侧内容-->
      <div class="self_content">
        <!--头部搜索-->
        <div class="self_content_top">
          <mu-dropDown-menu class="self_select_order" :value="value" @change="handleChange">
            <mu-menu-item value="1" title="全部订单"/>
            <mu-menu-item value="2" title="酒店订单"/>
            <mu-menu-item value="3" title="机票订单"/>
          </mu-dropDown-menu>

          <mu-text-field class="self_search" hintText="请输入订单号"/>
          <mu-text-field class="self_search" hintText="请输入出行人姓名"/>

          <mu-raised-button label="搜索" class="demo-raised-button" 搜索/>
        </div>
      </div>
    </div>.
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '1'
      }
    },
    methods: {
      handleChange(value) {
        this.value = value
      },
      unselect() {
        this.$refs.table.unSelectAll()
      }

    }

  }
</script>

<style lang="scss">
  #self {
    .self_breadcrumb {
      margin: 30px 50px;
      width: 100%;
      .mu-breadcrumb-item-link {
        color: white;
        margin: 10px;
      }
    }
    .self_box {
      width: 100%;
      height: calc(100% - 86px);
      //左侧菜单样式
      .self_muse {
        float: left;
        display: inline-block;
        width: 168px;
        height: auto;
        background-color: white;
        margin-left: 100px;
        border-radius: 5px;
        .self_right_muse {
          display: inline-block;
          margin: 10px 50px 0 0;
          width: 168px;
        }
      }
      //右侧内容样式
      .self_content {
        float: left;
        width: 1000px;
        height: auto;
        margin-left: 50px;
        background-color: white;
        border-radius: 10px;
        //右侧内容头部样式
        .self_content_top {
          display: inline-block;
          width: 100%;
          padding: 10px 20px;
          .self_select_order {
            float: left;
            margin-right: 20px;
          }
          .self_search {
            padding: 0;
            margin: 12px 30px 0 0;
          }
          .mu-dropDown-menu {
            display: inline-block;
          }

          .demo-raised-button {
            margin-top: 12px;
            background-color: #2196f3;
            color: white;
            margin-left: 30px;
          }
        }

          }
        }



  }
</style>
