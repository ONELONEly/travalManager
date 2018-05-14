<template>
  <div id="order">
    <!--地址-->
    <mu-breadcrumb class="order_breadcrumb">
      <mu-breadcrumb-item href="javascript:void(0)">
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">订单管理</mu-breadcrumb-item>
    </mu-breadcrumb>
    <!--主体内容盒子-->
    <div class="order_box">
      <div class="order_muse">
        <mu-flat-button label="因私订单" style="width: 100%;height: 50px;line-height: 50px"/>
        <mu-flat-button label="因公订单" style="width: 100%;height: 50px;line-height: 50px"/>
        <!--右侧菜单-->
        <!--<mu-paper class="order_right_muse">-->
          <!--<mu-menu>-->
            <!--<mu-menu-item title="因私订单"/>-->
            <!--<mu-menu-item title="因公订单"/>-->
            <!--<mu-menu-item title=" "/>-->
          <!--</mu-menu>-->
        <!--</mu-paper>-->
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
          <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height"
                    :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
                    :selectable="selectable" :showCheckbox="showCheckbox">
            <mu-thead slot="header">
              <mu-tr>
                <mu-th tooltip="order_ID">订单号</mu-th>
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
                <mu-td>{{item.Order_ID}}</mu-td>
                <mu-td>{{item.type}}</mu-td>
                <mu-td><div class="sst">{{item.start_time}}</div></mu-td>
                <mu-td><div class="sst">{{item.end_time}}</div></mu-td>
                <mu-td>{{item.start_city}}</mu-td>
                <mu-td>{{item.dest_city}}</mu-td>
                <mu-td>{{item.user}}</mu-td>
                <mu-td>{{item.price}}</mu-td>
                <mu-td>{{item.state}}</mu-td>
                <mu-td><mu-raised-button label="查看"  @click="$router.push('/home/order_details')"/><br/></mu-td>

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
            Order_ID:'134542213',
            type: '机票',
            start_time: '2017-01-02',
            end_time: '2017-02-01',
            start_city: '成都',
            dest_city: '上海',
            user: '张三',
            price: '2000',
            state:'已通过',


          },
          {
            Order_ID:'134542215',
            type: '酒店',
            start_time: '2017-01-02 ',
            end_time: '2017-02-01 ',
            start_city: '成都',
            dest_city: '上海',
            user: '张三',
            price: '400',
            state:'已取消',


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

          .demo-table-settings {
            width: 200px;
            overflow: hidden;
            margin: 20px auto 0px;
          }
        }
      }
.sst{
  word-wrap:break-word ;
  word-break:break-all ;
  height: auto;
  width: 40px;
}
    }
  }

</style>
