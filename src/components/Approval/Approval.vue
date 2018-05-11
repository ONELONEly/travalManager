<template>
  <div id="approval">
    <mu-breadcrumb class="breadcrumb">
      <mu-breadcrumb-item href="/">
        <mu-icon value="home" :size="16"/>
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="/">审批管理</mu-breadcrumb-item>
    </mu-breadcrumb>

    <div class="box">
      <div class="menu">
        <mu-paper class="demo-menu">
          <mu-menu>
            <mu-menu-item title="已审批"/>
            <mu-menu-item title="待审批"/>
            <mu-menu-item title=" "/>
          </mu-menu>
        </mu-paper>

      </div>
      <div class="content">
        <div class="content_top">
          <mu-dropDown-menu class="select_order" :value="value" @change="handleChange">
            <mu-menu-item value="1" title="全部订单"/>
            <mu-menu-item value="2" title="酒店订单"/>
            <mu-menu-item value="3" title="机票订单"/>
          </mu-dropDown-menu>

          <mu-text-field class="search" hintText="请输入订单号"/>
          <mu-text-field class="search" hintText="请输入出行人姓名"/>

          <mu-raised-button label="搜索" class="demo-raised-button" 搜索/>
        </div>
        <div class="table">
          <mu-table  class="xiangqing" multiSelectable enableSelectAll ref="table">
            <mu-thead>
              <mu-tr>
                <mu-th>订单编号</mu-th>
                <mu-th>订单类型</mu-th>
                <mu-th>出行人</mu-th>
              </mu-tr>
            </mu-thead>
            <mu-tbody>
              <mu-tr>
                <mu-td>10001</mu-td>
                <mu-td>机票订单</mu-td>
                <mu-td>张三</mu-td>
              </mu-tr>
              <mu-tr>
                <mu-td>20002</mu-td>
                <mu-td>机票订单</mu-td>
                <mu-td>王老五</mu-td>
              </mu-tr>
              <mu-tr>
                <mu-td>30002</mu-td>
                <mu-td>酒店订单</mu-td>
                <mu-td>李小二</mu-td>
              </mu-tr>
              <mu-tr>
                <mu-td>40004</mu-td>
                <mu-td>酒店订单</mu-td>
                <mu-td>张晓</mu-td>
              </mu-tr>
            </mu-tbody>
          </mu-table>
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
      unselect () {
        this.$refs.table.unSelectAll()
      }

    }

  }

</script>

<style lang="scss">
  #approval {
    .menu {
      float: left;
      display: inline-block;
      width: 168px;
      height: auto;
      background-color: white;
      margin-left: 100px;
      border-radius: 5px;
    }

    .box {
      width: 100%;
      height: calc(100% - 86px);

    }

    .content {
      float: left;
      width: 1000px;
      height: auto;
      margin-left: 50px;
      background-color: white;
      border-radius: 10px;
      .table{
        width: 100%;
        height: auto;

        .xiangqing{
          width: 900px;
        }
      }
      .content_top {
        display: inline-block;
        width: 100%;
        padding: 10px 20px;
        .select_order {
          float: left;
          margin-right: 20px;
        }
        .search {
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

    .breadcrumb {
      margin: 30px 50px;
      width: 100%;
    }

    .mu-breadcrumb-item-link {
      color: white;
      margin: 10px;
    }
    .demo-menu {
      display: inline-block;
      margin: 10px 50px 0 0;
      width: 168px;
    }

  }


</style>
