<template>
  <div id="approval">
    <mu-breadcrumb class="approval_breadcrumb">
      <mu-breadcrumb-item href="javascript:void(0)">
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">审批管理</mu-breadcrumb-item>
    </mu-breadcrumb>

    <div class="box">
      <div class="menu">
        <mu-flat-button label="已审批" style="width: 100%;height: 50px;line-height: 50px"/>
        <mu-flat-button label="待审批" style="width: 100%;height: 50px;line-height: 50px"/>

      </div>
      <div class="content">
        <div class="content_top">
          <mu-dropDown-menu class="select_order" :value="value" @change="handleChange">
            <mu-menu-item value="1" title="全部订单"/>
            <mu-menu-item value="2" title="酒店订单"/>
            <mu-menu-item value="3" title="机票订单"/>
          </mu-dropDown-menu>

          <mu-text-field v-model="orderSearchKey" class="search" hintText="请输入订单号"/>
          <mu-text-field v-model="nameSearchKey" class="search" hintText="请输入出行人姓名"/>

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
              <mu-tr v-for="(item,index) in tableData" :key="index" :selected="item.selected" v-if="comSearch(item)">
                <mu-td>{{ item.orderId}}</mu-td>
                <mu-td>{{item.orderType}}</mu-td>
                <mu-td>
                  <div class="sst">{{item.startTime}}</div>
                </mu-td>
                <mu-td>
                  <div class="sst">{{item.endTime}}</div>
                </mu-td>
                <mu-td>{{item.fromCity}}</mu-td>
                <mu-td>{{item.destCity}}</mu-td>
                <mu-td>{{item.userName}}</mu-td>
                <mu-td>{{item.price}}</mu-td>
                <mu-td>{{item.status}}</mu-td>
                <mu-td>
                  <mu-raised-button label="查看详情" @click="$router.push('/home/order_details')"/>
                  <br/>
                  <mu-raised-button label="通过" @click="tmpNowCheckItem(item, 1)"/>
                  <!--@click="accept = true"-->
                  <br/>
                  <mu-raised-button label="驳回" @click="tmpNowCheckItem(item, 2)"/>
                  <!--@click="reject = true"-->
                </mu-td>
              </mu-tr>
              <!---审核通过-->
              <mu-dialog :open="accept" title="审核通过" @close="accept = false">
                是否通过？
                <mu-flat-button slot="actions" @click="accept = false" primary label="取消"/>
                <mu-flat-button slot="actions" primary @click="checkOrder" label="确定"/>
              </mu-dialog>
              <!---审核驳回-->
              <mu-dialog :open="reject" title="审核驳回" @close="reject = false">
                是否驳回
                <mu-flat-button slot="actions" @click="reject = false" primary label="取消"/>
                <mu-flat-button slot="actions" primary @click="checkOrder" label="确定"/>
              </mu-dialog>
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
        accept: false,
        reject: false,
        value: '1',
        tableData: [
          // {
          //   "orderId": "201805150909441",
          //   "startTime": "20180520",
          //   "endTime": "20180520",
          //   "userId": 9,
          //   "userName": "handsome",
          //   "orderType": "机票",
          //   "orderTime": "2018-05-15 09:06:20",
          //   "price": 516,
          //   "status": "待支付",
          //   "fromCity": "成都",
          //   "destCity": "上海"
          // }
        ],
        fixedHeader: true,
        fixedFooter: false,
        selectable: true,
        multiSelectable: true,
        enableSelectAll: false,
        showCheckbox: false,
        height: '300px',
        // 搜索关键字
        orderSearchKey: "",
        nameSearchKey: "",
        // 审批缓存
        tmpCheckItem: null,
        tmpCheckType: ""
      }
    },
    created() {
      // 获取订单列表
      this.getOrderList()
    },
    methods: {
      handleChange(value) {
        this.value = value
      },
      unselect() {
        this.$refs.table.unSelectAll()
      },
      open() {
        this.dialog = true
      },
      close() {
        this.dialog = false
      },
      // 获取订单
      getOrderList() {
        this.$axios.post('/admin/searchReviewOrder', {}).then((res) => {
          this.tableData = res.data.data.reviewOrderDTOList
        })
      },
      // 计算搜索
      comSearch(item) {
        return (item.orderId.indexOf(this.orderSearchKey) > -1 && item.userName.indexOf(this.nameSearchKey) > -1)
      },
      // 缓存当前审批项目
      tmpNowCheckItem(item, type) {
        this.tmpCheckItem = item
        this.tmpCheckType = type
        if (this.tmpCheckType == 1) {
          this.accept = true
        }else if (this.tmpCheckType == 2) {
          this.reject = true
        }
      },
      // 审批订单
      checkOrder() {
        // 判断订单类型
        if (this.tmpCheckItem.orderType == "机票") {
          this.$axios.post('/admin/updateAirTicketOrder', {
            orderId: this.tmpCheckItem.orderId,
            status: this.tmpCheckType
          }).then((res) => {
            this.getOrderList()
            if (this.tmpCheckType == 1) {
              this.accept = false
            }else if (this.tmpCheckType == 2) {
              this.reject = false
            }
          }).catch((error) => {
            // 异常
            alert(error.toString())
          })
        }else if (this.tmpCheckItem.orderType == "酒店") {
          this.$axios.post('/admin/updateHotelOrder', {
            orderId: this.tmpCheckItem.orderId,
            status: this.tmpCheckType
          }).then((res) => {
            this.getOrderList()
            if (this.tmpCheckType == 1) {
              this.accept = false
            }else if (this.tmpCheckType == 2) {
              this.reject = false
            }
          }).catch((error) => {
            // 异常
            alert(error.toString())
          })
        }
      }
    }

  }

</script>

<style lang="scss">
  #approval {
    .approval_breadcrumb {
      margin: 30px 50px;
      width: 100%;
      .mu-breadcrumb-item-link {
        color: white;
        margin: 10px;
      }
    }
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

    .demo-menu {
      display: inline-block;
      margin: 10px 50px 0 0;
      width: 168px;
    }
    .mu-td {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }


</style>
