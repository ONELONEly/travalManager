<template>
  <div id="order">
    <!--地址-->
    <mu-breadcrumb class="order_breadcrumb">
      <mu-breadcrumb-item href="/">
        <mu-icon value="home" :size="16"/>
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="/">订单管理</mu-breadcrumb-item>
    </mu-breadcrumb>
    <!--主体内容盒子-->
    <div class="order_box">
      <div class="order_muse">
        <!--右侧菜单-->
        <mu-paper class="order_right_muse">
          <mu-menu>
            <mu-menu-item title="因私订单"/>
            <mu-menu-item title="因公订单"/>
            <mu-menu-item title=" "/>
          </mu-menu>
        </mu-paper>
      </div>
      <!--左侧内容-->
      <div class="order_content">
        <!--头部搜索-->
        <div class="order_content_top">
          <mu-dropDown-menu class="order_select_order" :value="value" @change="handleChange">
            <mu-menu-item value="1" title="全部订单"/>
            <mu-menu-item value="2" title="酒店订单"/>
            <mu-menu-item value="3" title="机票订单"/>
          </mu-dropDown-menu>

          <mu-text-field class="order_search" hintText="请输入订单号"/>
          <mu-text-field class="order_search" hintText="请输入出行人姓名"/>

          <mu-raised-button label="搜索" class="demo-raised-button" 搜索/>
        </div>

        <div class="order_table">
          <table class="order_table_content">
            <thead class="order_table_head">
            <tr>
              <td>订单号</td>
              <td>订单信息</td>
              <td>订单类型</td>
              <td>出行人</td>
              <td>出发时间</td>
              <td>金额</td>
              <td>审核状态</td>
              <td>操作</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>1</td>
              <td>2</td>
              <td>1</td>
              <td>2</td>
              <td>2</td>
            </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>

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
  #order {
    //面包屑样式
    .order_breadcrumb {
      margin: 30px 50px;
      width: 100%;
      .mu-breadcrumb-item-link {
        color: white;
        margin: 10px;
      }
    }
    .order_box {
      width: 100%;
      height: calc(100% - 86px);
      //左侧菜单样式
      .order_muse {
        float: left;
        display: inline-block;
        width: 168px;
        height: auto;
        background-color: white;
        margin-left: 100px;
        border-radius: 5px;
        .order_right_muse {
          display: inline-block;
          margin: 10px 50px 0 0;
          width: 168px;
        }
      }
      //右侧内容样式
      .order_content {
        float: left;
        width: 1000px;
        height: auto;
        margin-left: 50px;
        background-color: white;
        border-radius: 10px;
        //右侧内容头部样式
        .order_content_top {
          display: inline-block;
          width: 100%;
          padding: 10px 20px;
          .order_select_order {
            float: left;
            margin-right: 20px;
          }
          .order_search {
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
        //右侧表格样式
        .order_table {
          width: 100%;
          height: auto;
          margin-left: 20px;
          .order_table_content {
            width: 900px;
            .order_table_head{
              line-height: 30px;
              background-color: #2196f3;
              color: white;

            }
          }
        }
      }
    }

  }
</style>
