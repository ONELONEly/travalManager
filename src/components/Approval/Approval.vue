<template>
  <div id="approval">
    <mu-breadcrumb class="breadcrumb">
      <mu-breadcrumb-item href="javascript:void(0)">
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">审批管理</mu-breadcrumb-item>
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

          <div class="approval_table">
            <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height"
                      :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
                      :selectable="selectable" :showCheckbox="showCheckbox">
              <mu-thead slot="header">
                <mu-tr>
                  <mu-th tooltip="approval_ID">订单号</mu-th>
                  <mu-th tooltip="type">产品类型</mu-th>
                  <mu-th tooltip="start_time">开始时间</mu-th>
                  <mu-th tooltip="end_time">结束时间</mu-th>
                  <mu-th tooltip="start_city">出发城市</mu-th>
                  <mu-th tooltip="dest_city">到达城市</mu-th>
                  <mu-th tooltip="user">出行人</mu-th>
                  <mu-th tooltip="price">价格</mu-th>
                  <mu-th tooltip="state">状态</mu-th>
                  <mu-th tooltip="operation">操作</mu-th>


                </mu-tr>
              </mu-thead>
              <mu-tbody>
                <mu-tr v-for="item,index in tableData" :key="index" :selected="item.selected">
                  <mu-td>{{ item.approval_ID}}</mu-td>
                  <mu-td>{{item.type}}</mu-td>
                  <mu-td><div class="sst">{{item.start_time}}</div></mu-td>
                  <mu-td><div class="sst">{{item.end_time}}</div></mu-td>
                  <mu-td>{{item.start_city}}</mu-td>
                  <mu-td>{{item.dest_city}}</mu-td>
                  <mu-td>{{item.user}}</mu-td>
                  <mu-td>{{item.price}}</mu-td>
                  <mu-td>{{item.state}}</mu-td>
                  <mu-td>{{item.operation}}</mu-td>

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
        value: '1',
        tableData: [
          {
            approval_ID:'134542213',
            type: '机票',
            start_time: '2017-01-02',
            end_time: '2017-02-01',
            start_city: '成都',
            dest_city: '上海',
            user: '张三',
            price: '2000',
            state:'审核通过',
            operation:''

          },
          {
            approval_ID:'134542215',
            type: '酒店',
            start_time: '2017-01-02 ',
            end_time: '2017-02-01 ',
            start_city: '成都',
            dest_city: '上海',
            user: '张三',
            price: '400',
            state:'审核不通过',
            operation:''

          },


        ],
        fixedHeader: true,
        fixedFooter: false,
        selectable: true,
        multiSelectable: true,
        enableSelectAll: false,
        showCheckbox: false,
        height: '300px'
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
      .order_table {
        width: 100%;
        height: auto;

        .demo-table-settings {
          width: 200px;
          overflow: hidden;
          margin: 20px auto 0px;
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
