<template>
  <div id="plan_ticker">
    <!--书签-->
    <mu-breadcrumb class="breadcrumb_qy">
      <mu-breadcrumb-item href="javascript:void(0)">
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">机票预订</mu-breadcrumb-item>
    </mu-breadcrumb>
    <!--主干区域-->
    <div class="pt_main">
      <!--搜索框-->
      <mu-paper class="pt_search_box" :zDepth="2">
        <mu-text-field v-model="originPlace" hintText="出发地"/>
        <span style="margin: 0 10px"> - </span>
        <mu-text-field v-model="destinationPlace" hintText="目的地"/>
        <mu-date-picker v-model="departureDate" hintText="出发日期"/>
        <mu-raised-button class="pt_search_btn" label="查询" primary @click="getPlaneTicketInfo"/>
      </mu-paper>
      <!--机票条目-->
      <mu-paper v-for="(airTicket, index) in airTicketWithCostBOList" :key="index" class="pt_item">
        <span class="pt_item_place">
          {{airTicket.airTicketPO.fromCity}}
        </span>
        <!--机场信息盒子-->
        <div class="pt_info_box">
          <div class="pt_info_time">{{airTicket.airTicketPO.startTime}}</div>
          <div class="pt_info_airport">{{airTicket.airTicketPO.fromCity}}</div>
        </div>
        <mu-icon value="arrow_forward"></mu-icon>
        <div class="pt_info_box">
          <div class="pt_info_time">{{airTicket.airTicketPO.endTime}}</div>
          <div class="pt_info_airport">{{airTicket.airTicketPO.destCity}}</div>
        </div>
        <span class="pt_item_place">
          {{airTicket.airTicketPO.destCity}}
        </span>
        <!--收起展开按钮-->
        <mu-raised-button class="pt_item_btn" label="收起" labelPosition="before" icon="expand_less" primary/>
        <!--机票列表-->
        <div v-for="(airTicketItem, itemIndex) in airTicket.airTicketCostPOList" :key="itemIndex" class="pt_item_list_box">
          <div class="plan_ticket">
            <span class="plan_ticket_name">{{airTicketItem.seatType}}</span>
            <!--价格-->
            <span class="plan_ticket_price">￥{{airTicketItem.price}}</span>
            <!--预定按钮-->
            <mu-raised-button label="预定" class="plan_ticket_order_btn" secondary  @click="toReserve(airTicket, airTicketItem)"/>
          </div>
          <!--<div class="plan_ticket">-->
            <!--<span class="plan_ticket_name">经济舱9折</span>-->
            <!--&lt;!&ndash;价格&ndash;&gt;-->
            <!--<span class="plan_ticket_price">￥3400</span>-->
            <!--&lt;!&ndash;预定按钮&ndash;&gt;-->
            <!--<mu-raised-button label="预定" class="plan_ticket_order_btn" secondary @click="$router.push('/home/reserve')"/>-->
          <!--</div>-->
          <!--<div class="plan_ticket">-->
            <!--<span class="plan_ticket_name">经济舱3折</span>-->
            <!--&lt;!&ndash;价格&ndash;&gt;-->
            <!--<span class="plan_ticket_price">￥1400</span>-->
            <!--&lt;!&ndash;预定按钮&ndash;&gt;-->
            <!--<mu-raised-button label="预定" class="plan_ticket_order_btn" secondary  @click="$router.push('/home/reserve')"/>-->
          <!--</div>-->
        </div>
      </mu-paper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlaneTicket',
    // 数据
    data() {
      return {
        publicOrPrivate: "",
        originPlace: "",
        destinationPlace: "",
        departureDate: "",
        // 机票信息
        airTicketWithCostBOList: []
      }
    },
    // 页面创建时
    created() {
      this.publicOrPrivate = this.$route.params.publicOrPrivate
      this.originPlace = this.$route.params.originPlace
      this.destinationPlace = this.$route.params.destinationPlace
      this.departureDate = this.$route.params.departureDate
      // 获取机票信息
      this.getPlaneTicketInfo()
    },
    // 方法
    methods: {
      // 获取机票信息
      getPlaneTicketInfo() {
        // 获取用户订单
        this.$axios.post('/airTicket/search',{
          type: this.publicOrPrivate,
          fromCity: this.originPlace,
          destCity: this.destinationPlace,
          startDay: this.departureDate
        }).then((res) =>{
          // console.log(res.data.data.airTicketWithCostBOList)
          this.airTicketWithCostBOList = res.data.data.airTicketWithCostBOList
        })
      },
      // 预定
      toReserve(plane,ticket) {
        this.$router.push({
          name: 'reserve',
          params: {
            publicOrPrivate: this.publicOrPrivate,
            type: 'PlaneTicket',
            plane: plane,
            ticket: ticket
          }
        })
        // $router.push('/home/reserve')
      }
    }
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
      // 机票条目
      .pt_item {
        padding: 15px 30px;
        margin: 10px 0;
        // 地点
        .pt_item_place {
          margin: 5px 20px;
          font-size: 1.6rem;
        }
        // 机场信息盒子
        .pt_info_box {
          display: inline-block;
          margin: 10px 20px;
          text-align: center;
          .pt_info_time {
            font-size: 1rem;
          }
        }
        // 收起展开按钮
        .pt_item_btn {
          margin-top: 20px;
          float: right;
        }
        // 机票列表盒子
        .pt_item_list_box {
          margin-top: 20px;
          padding: 15px 30px;
          background: gainsboro;
          // 机票
          .plan_ticket {
            margin: 10px 0;
            .plan_ticket_name {
              display: inline-block;
              height: 30px;
              line-height: 30px;
              width: 200px;
              font-size: 1rem;
            }
            .plan_ticket_price {
              height: 30px;
              line-height: 30px;
              margin: 0 60px;
              font-size: 1rem;
              color: red;
            }
            .plan_ticket_order_btn {
              float: right;
              height: 30px;
            }
          }
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
