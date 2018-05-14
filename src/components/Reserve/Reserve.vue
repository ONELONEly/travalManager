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
        <div class="reserve_content">
          <span class="reserve_name">{{orderName}}</span>
          <div class="reserve_time_box">
            <div class="reserve_time_se_box">
              <div class="reserve_time">{{orderStartTime}}</div>
              <div>开始时间</div>
            </div>
            <mu-icon value="arrow_forward"></mu-icon>
            <div class="reserve_time_se_box">
              <div class="reserve_time">{{orderEndTime}}</div>
              <div>结束时间</div>
            </div>
          </div>
          <!--类型-->
          <span class="reserve_type">{{orderItemType}}</span>
          <!--价格-->
          <span class="reserve_price">￥{{orderPrice}}</span>
        </div>
      </mu-paper>
      <!--出行人信息-->
      <mu-paper class="reserve_info_box" :zDepth="2">
        <!--标题-->
        <div class="reserve_info_title">出行人信息</div>
        <!--内容-->
        <div class="reserve_content">
          <div class="reserve_item">
            <span class="reserve_label">姓名：</span>
            <span class="reserve_label">{{user.dsca}}</span>
            <span class="reserve_label_divide"></span>
            <span class="reserve_label">电话：</span>
            <span class="reserve_label">{{user.phone}}</span>
          </div>
          <div class="reserve_item">
            <span class="reserve_label">邮箱：</span>
            <span class="reserve_label">{{user.email}}</span>
          </div>
          <div class="reserve_item">
            <span class="reserve_label">部门：</span>
            <span class="reserve_label">技术部</span>
          </div>
          <div class="reserve_item">
            <span class="reserve_label">差旅标准：</span>
            <span class="reserve_label">普通员工</span>
          </div>
          <div class="reserve_item">
            <span class="reserve_label">请输入出行理由：</span>
            <mu-text-field v-model="travelReason" hintText="出行理由"/>
          </div>
        </div>
      </mu-paper>
      <!--差旅违规原因-->
      <mu-paper class="reserve_info_box" :zDepth="2">
        <!--标题-->
        <div class="reserve_info_title">差旅违规原因</div>
        <!--内容-->
        <div class="reserve_content">
          <div class="reserve_item">
            <span class="reserve_label">违反购买机票6折以下预订</span>
          </div>
          <div class="reserve_item">
            <span class="reserve_label">违反提前三天购买机票限制</span>
          </div>
          <div class="reserve_item">
            <span class="reserve_label">请输入违规理由：</span>
            <mu-text-field v-model="breachReason" hintText="违规理由"/>
          </div>
        </div>
      </mu-paper>
      <mu-raised-button label="提交" style="float: right;margin: 20px" primary @click="submitOrder"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reserve',
    // 页面创建时
    created() {
      this.publicOrPrivate = this.$route.params.publicOrPrivate
      // 判断类型
      this.type = this.$route.params.type
      if (this.type == 'Hotel') {
        this.checkInTime = this.$route.params.checkInTime
        this.leaveTime = this.$route.params.leaveTime
        this.hotel = this.$route.params.hotel
        this.rom = this.$route.params.rom
      }
      else if(this.type == 'PlaneTicket') {
        this.plane = this.$route.params.plane
        this.ticket = this.$route.params.ticket
      }
    },
    // 数据
    data() {
      return {
        // 出行原因
        travelReason: "",
        // 违规原因
        breachReason: "",
        publicOrPrivate: "",
        type: '',
        plane: '',
        ticket: '',
        checkInTime: '',
        leaveTime: '',
        hotel: '',
        rom: ''
      }
    },
    // 计算变量
    computed: {
      user() {
        return this.$store.state.user.loginUser.user;
      },
      orderName() {
        if (this.type == 'Hotel') {
          return this.hotel.hotelPO.hotelName
        }else if(this.type == 'PlaneTicket'){
          return this.plane.airTicketPO.fromCity + ' - ' + this.plane.airTicketPO.destCity
        }else {
          return ""
        }
      },
      orderStartTime() {
        if (this.type == 'Hotel') {
          return this.checkInTime
        }else if(this.type == 'PlaneTicket'){
          return this.plane.airTicketPO.startTime
        }else {
          return ""
        }
      },
      orderEndTime() {
        if (this.type == 'Hotel') {
          return this.leaveTime
        }else if(this.type == 'PlaneTicket'){
          return this.plane.airTicketPO.endTime
        }else {
          return ""
        }
      },
      orderPrice() {
        if (this.type == 'Hotel') {
          return this.rom.roomPrice
        }else if(this.type == 'PlaneTicket'){
          return this.ticket.price
        }else {
          return ""
        }
      },
      orderItemType(){
        if (this.type == 'Hotel') {
          return this.rom.roomType
        }else if(this.type == 'PlaneTicket'){
          return this.ticket.seatType
        }else {
          return ""
        }
      }
    },
    methods: {
      // 提交订单
      submitOrder() {
        if (this.type == 'Hotel') {

          this.$axios.post('/hotel/order',{
            type: this.publicOrPrivate,
            priFive: this.breachReason == ""?0:1,
            userIdList: [this.user.id],
            hotelCostId: this.rom.hotelCostId,
            beginTime: this.checkInTime,
            endTime: this.leaveTime,
            destReason: this.travelReason,
            violationReason: this.breachReason
          }).then((res) =>{
            alert(res.data.msg)
          })
        }else if(this.type == 'PlaneTicket'){
          console.log(JSON.stringify(
            {
              type: this.publicOrPrivate,
              priFive: this.breachReason == ""?0:1,
              userIdList: [this.user.id],
              airTicketCostId: this.ticket.airTicketCostId,
              destReason: this.travelReason,
              violationReason: this.breachReason
            }
          ))
          this.$axios.post('/airTicket/order',{
            type: this.publicOrPrivate,
            priFive: this.breachReason == ""?0:1,
            userIdList: [this.user.id],
            airTicketCostId: this.ticket.airTicketCostId,
            destReason: this.travelReason,
            violationReason: this.breachReason
          }).then((res) =>{
            alert(res.data.msg)
          })
        }else {
          return
        }
      }
    },
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
        margin: 10px 0;
        .reserve_info_title {
          width: 100%;
          padding: 5px;
          border-bottom: 1px gray solid;
        }
        .reserve_content {
          margin: 10px 20px;
          width: 100%;
          .reserve_name {
            font-size: 1.5rem;
          }
          .reserve_time_box {
            display: inline-block;
            margin: 10px 100px;
            text-align: center;
            .reserve_time_se_box {
              display: inline-block;
              margin: 0 20px;
              .reserve_time {
                font-size: 1rem;
              }
            }
          }
          .reserve_type {
            margin: 10px 50px;
            font-size: 1.2rem;
          }
          .reserve_price {
            float: right;
            margin-top: 30px;
            margin-right: 50px;
            font-size: 1.2rem;
            color: red;
          }
          .reserve_item {
            padding: 5px;
            margin: 5px;
            .reserve_label {
              display: inline-block;
              margin-right: 15px;
              font-size: 1rem;
            }
            .reserve_label_divide {
              display: inline-block;
              margin-left: 30px;
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
