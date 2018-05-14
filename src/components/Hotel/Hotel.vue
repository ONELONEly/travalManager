<template>
  <div id="hotel">
    <!--书签-->
    <mu-breadcrumb class="breadcrumb_qy">
      <mu-breadcrumb-item href="javascript:void(0)">
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">酒店预订</mu-breadcrumb-item>
    </mu-breadcrumb>
    <!--主干区域-->
    <div class="pt_main">
      <!--搜索框-->
      <mu-paper class="pt_search_box" :zDepth="2">
        <mu-text-field v-model="hotelPlace" hintText="目的地"/>
        <mu-date-picker v-model="checkInTime" hintText="入住时间"/>
        <span style="margin: 0 10px"> - </span>
        <mu-date-picker v-model="leaveTime" hintText="离开时间"/>
        <mu-raised-button class="pt_search_btn" label="查询" primary/>
      </mu-paper>
      <!--机票条目-->
      <mu-paper class="pt_item">
        <!--酒店图片-->
        <img class="hotel_img" src="">
        <div class="hotel_info_box">
          <div class="hotel_info_name">成都皇冠酒店</div>
          <div class="pt_info_address">成都市*****</div>
          <div class="pt_info_phone">1***********</div>
        </div>
        <!--收起展开按钮-->
        <mu-raised-button class="pt_item_btn" label="收起" labelPosition="before" icon="expand_less" primary/>
        <!--机票列表-->
        <div class="pt_item_list_box">
          <div class="plan_ticket">
            <!--图片-->
            <img class="room_img" src="">
            <span class="plan_ticket_name">大床房</span>
            <!--价格-->
            <span class="plan_ticket_price">￥380</span>
            <!--预定按钮-->
            <mu-raised-button label="预定" class="plan_ticket_order_btn" secondary
                              @click="$router.push('/home/reserve')"/>
          </div>
          <div class="plan_ticket">
            <!--图片-->
            <img class="room_img" src="">
            <span class="plan_ticket_name">大床房</span>
            <!--价格-->
            <span class="plan_ticket_price">￥340</span>
            <!--预定按钮-->
            <mu-raised-button label="预定" class="plan_ticket_order_btn" secondary
                              @click="$router.push('/home/reserve')"/>
          </div>
        </div>
      </mu-paper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Hotel",
    // 数据
    data() {
      return {
        publicOrPrivate: "",
        hotelPlace: "",
        checkInTime: "",
        leaveTime: "",
        hotelKey: ""
      }
    },
    // 页面创建时
    created() {
      this.publicOrPrivate = this.$route.params.publicOrPrivate
      this.hotelPlace = this.$route.params.hotelPlace
      this.checkInTime = this.$route.params.checkInTime
      this.leaveTime = this.$route.params.leaveTime
      this.hotelKey = this.$route.params.hotelKey
      // 获取机票信息
      this.getHotelInfo()
    },
    // 方法
    methods: {
      // 获取酒店信息
      getHotelInfo() {
        // 获取用户订单
        this.$axios.post('/hotel/search',{
          type: this.publicOrPrivate,
          hotelCity: this.hotelPlace
        }).then((res) =>{
          console.log(res.data)
        })
      }
    }
  }
</script>

<style lang="scss">
  #hotel {
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
        .hotel_img {
          margin: 5px;
          width: 140px;
          height: 100px;
        }
        // 机场信息盒子
        .hotel_info_box {
          display: inline-block;
          margin: 10px 20px;
          text-align: left;
          div {
            margin: 5px;
          }
          .hotel_info_name {
            font-size: 1.6rem;
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
            height: 70px;
            line-height: 70px;
            // 房间图片
            .room_img {
              display: inline-block;
              margin-right: 20px;
              float: left;
              width: 100px;
              height: 70px;
            }
            .plan_ticket_name {
              float: left;
              display: inline-block;
              margin-top: 20px;
              height: 30px;
              line-height: 30px;
              width: 150px;
              font-size: 1rem;
            }
            .plan_ticket_price {
              float: left;
              height: 30px;
              line-height: 30px;
              margin: 20px 60px 0 60px;
              font-size: 1rem;
              color: red;
            }
            .plan_ticket_order_btn {
              float: right;
              margin-top: 20px;
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
