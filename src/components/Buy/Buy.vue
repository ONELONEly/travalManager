<template>
  <div id="buy">
    <!--书签-->
    <mu-breadcrumb class="breadcrumb_qy">
      <mu-breadcrumb-item href="javascript:void(0)">
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">出行预订</mu-breadcrumb-item>
    </mu-breadcrumb>
    <!--主干区域-->
    <div class="buy_main">
      <!--左侧盒子-->
      <div class="buy_main_left">
        <!--产品搜索-->
        <mu-paper class="product_search_box" :zDepth="2">
          <mu-row>
            <mu-col class="product_search_box_menu" width="30" tablet="30" desktop="30">
              <mu-paper>
                <mu-flat-button class="product_search_box_menu_item" label="国内机票" @click="product_search_tab_select = 'planeTicket'" :class="product_search_tab_select=='planeTicket'?'product_search_box_menu_item_select':''"/>
                <mu-flat-button class="product_search_box_menu_item" label="国内酒店" @click="product_search_tab_select = 'hotel'" :class="product_search_tab_select=='hotel'?'product_search_box_menu_item_select':''"/>
              </mu-paper>
            </mu-col>
            <mu-col class="product_search_box_content" width="70" tablet="70" desktop="70">
              <!--飞机票-->
              <div v-if="product_search_tab_select === 'planeTicket'">
                <!--公私-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 30px;line-height: 30px">出行类型</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-radio label="因公" name="group" nativeValue="business" v-model="publicOrPrivate"/>
                    <mu-radio label="因私" name="group" nativeValue="private" v-model="publicOrPrivate"/>
                  </mu-col>
                </mu-row>
                <!--去返城市-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 56px;line-height: 56px">去返城市</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-text-field v-model="originPlace" class="product_search_input" hintText="起始地"/>
                    <span style="margin: 0 5px">-</span>
                    <mu-text-field v-model="destinationPlace" class="product_search_input" hintText="目的地"/>
                  </mu-col>
                </mu-row>
                <!--出发日期-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 56px;line-height: 56px">出发日期</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-date-picker v-model="departureDate" class="product_search_input" hintText="选择日期"/>
                  </mu-col>
                </mu-row>
                <!--搜索按钮-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-raised-button label="搜索" primary @click="toPlaneTicket"/>
                  </mu-col>
                </mu-row>
              </div>
              <!--酒店-->
              <div v-if="product_search_tab_select === 'hotel'">
                <!--公私-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 30px;line-height: 30px">出行类型</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-radio label="因公" name="group" nativeValue="business" v-model="publicOrPrivate"/>
                    <mu-radio label="因私" name="group" nativeValue="private" v-model="publicOrPrivate"/>
                  </mu-col>
                </mu-row>
                <!--目的地-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 56px;line-height: 56px">目的地</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-text-field v-model="hotelPlace" class="product_search_input" hintText="地点"/>
                  </mu-col>
                </mu-row>
                <!--入住时间-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 56px;line-height: 56px">入住时间</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-date-picker v-model="checkInTime" class="product_search_input" hintText="入住"/>
                    <span style="margin: 0 5px">-</span>
                    <mu-date-picker v-model="leaveTime" class="product_search_input" hintText="离开"/>
                  </mu-col>
                </mu-row>
                <!--关键字-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 56px;line-height: 56px">关键字</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-text-field v-model="hotelKey" hintText="如位置\酒店名\品牌"/>
                  </mu-col>
                </mu-row>
                <!--搜索按钮-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-raised-button label="搜索" primary @click="toHotel"/>
                  </mu-col>
                </mu-row>
              </div>
            </mu-col>
          </mu-row>
        </mu-paper>
        <!--我的申请-->
        <mu-paper class="buy_main_box my_apply_box" :zDepth="2">
          <!--头部-->
          <div class="buy_main_box_header">
            我的申请
            <span class="buy_main_box_header_right">
              <a href="javascript:void(0)" @click="$router.push('/home/order')">{{moreText}}</a>
            </span>
          </div>
          <!--列表-->
          <mu-table :showCheckbox="false">
            <mu-thead>
              <mu-tr>
                <mu-th>订单号</mu-th>
                <mu-th>日期</mu-th>
                <mu-th>类型</mu-th>
                <mu-th>起始地</mu-th>
                <mu-th>目的地</mu-th>
                <mu-th>状态</mu-th>
              </mu-tr>
            </mu-thead>
            <mu-tbody>
              <mu-tr v-for="(order, index) in orderList" :key="index">
                <mu-td>{{order.orderId}}</mu-td>
                <mu-td>{{order.orderTime}}</mu-td>
                <mu-td>{{order.orderType}}</mu-td>
                <mu-td>{{order.fromCity }}</mu-td>
                <mu-td>{{order.destCity}}</mu-td>
                <mu-td>{{order.status }}</mu-td>
              </mu-tr>
            </mu-tbody>
          </mu-table>
        </mu-paper>
    </div>
      <!--右侧盒子-->
      <div class="buy_main_right">
        <!--我的差旅标准-->
        <mu-paper class="buy_main_box my_apply_box" :zDepth="2">
          <!--头部-->
          <div class="buy_main_box_header">
            我的差旅标准
          </div>
          <div class="my_standard_content">
            <!--差旅标准条目-->
            <div class="my_standard_item">
              <p class="my_standard_item_name">机票</p>
              <div v-if="airTicketStage != null">
                <p class="my_standard_info">出发时间前后<span class="gree_message">{{airTicketStage.priOne}}</span>分钟内最低航班</p>
                <p class="my_standard_info">提前<span class="gree_message">{{airTicketStage.priTwo}}</span>天预订</p>
                <p class="my_standard_info"><span class="gree_message">{{airTicketStage.priThree}}</span>折以下价位</p>
                <p class="my_standard_info"><span class="gree_message">{{airTicketStage.priFour}}</span>以下舱位</p>
                <p class="my_standard_info"><span class="gree_message" v-if="airTicketStage.priFive == 1">可违规预定</span><span class="gree_message" v-else>不可违规预定</span></p>
              </div>
            </div>
            <div class="my_standard_item">
              <p class="my_standard_item_name">酒店</p>
              <div v-if="hotelStage != null">
                <p class="my_standard_info">一线城市：<span class="gree_message">{{hotelStage.priOne}}</span>元/天</p>
                <p class="my_standard_info">二线城市：<span class="gree_message">{{hotelStage.priTwo}}</span>元/天</p>
                <p class="my_standard_info">其它城市：<span class="gree_message">{{hotelStage.priThree}}</span>元/天</p>
                <p class="my_standard_info"><span class="gree_message" v-if="hotelStage.priFour == 1">可违规预定</span><span class="gree_message" v-else>不可违规预定</span></p>
              </div>
            </div>
          </div>
        </mu-paper>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Buy",
    data() {
      return {
        // 产品选择类型
        product_search_tab_select: 'planeTicket',
        // 因公或因私
        publicOrPrivate: '',
        // 更多文字
        moreText: '更多 >',
        airTicketStage:null,
        hotelStage:null,
        // 订单列表
        orderList: [],
        // 飞机票
        originPlace: "",
        destinationPlace: "",
        departureDate: "",
        // 酒店
        hotelPlace: "",
        checkInTime: "",
        leaveTime: "",
        hotelKey: ""
      }
    },
    created(){
      this.$http.post('/user/stage').then((res) =>{
        if(res.data.data !== null) {
          this.airTicketStage = res.data.data.airTicketStage;
          this.hotelStage = res.data.data.hotelStage;
        }
      })
      if (this.$store.state.user.loginUser == null) return
      // 获取用户订单
      this.$axios.post('/user/searchOrder',{}).then((res) =>{
        // console.log(res.data)
        this.orderList = res.data.data.orderDTOList
      })
    },
    methods: {
      handleTabChange(val) {
        this.activeTab = val
      },
      handleActive() {
        window.alert('tab active')
      },
      toPlaneTicket() {
        this.$router.push({
          name: 'plane-ticket',
          params: {
            publicOrPrivate: this.publicOrPrivate,
            originPlace: this.originPlace,
            destinationPlace: this.destinationPlace,
            departureDate: this.departureDate
          }
        })
      },
      toHotel() {
        this.$router.push({
          name: 'hotel',
          params: {
            publicOrPrivate: this.publicOrPrivate,
            hotelPlace: this.hotelPlace,
            checkInTime: this.checkInTime,
            leaveTime: this.leaveTime,
            hotelKey: this.hotelKey
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  #buy {
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: auto;
    // 主干区域
    .buy_main {
      display: inline-block;
      width: 90%;
      min-width: 1000px;
      // 左侧盒子
      .buy_main_left {
        float: left;
        width: 60%;
        text-align: left;
        // 搜索盒子
        .product_search_box {
          margin-bottom: 20px;
          // 搜索盒子菜单
          .product_search_box_menu {
            top: 0;
            bottom: 0;
            .product_search_box_menu_item {
              width: 100%;
              height: 50px;
              line-height: 50px;
              display: block;
            }
            .product_search_box_menu_item_select {
              background: gainsboro;
            }
          }
          // 搜索盒子内容
          .product_search_box_content {
            padding: 15px;
            // 条目
            .product_search_item {
              margin: 5px 0;
              .product_search_input {
                width: 100px;
                .mu-text-field {
                  width: 100px;
                }
              }
            }
          }
        }
      }
      // 右侧盒子
      .buy_main_right {
        float: right;
        width: 35%;
        text-align: left;
        // 我的差旅标准
        .my_standard_content {
          padding: 15px;
          // 条目
          .my_standard_item {
            .my_standard_item_name {
              color: #00bfff;
              font-size: 1rem;
              padding: 0;
              margin: 5px 0;
            }
            .my_standard_info {
              margin: 0 0 0 15px;
              padding: 0;
              .gree_message {
                color:#008000;
                font-size: large;
                font-weight: bold;
              }
            }
          }
        }
      }
      // 主干区域盒子
      .buy_main_box {
        // 头部
        .buy_main_box_header {
          width: 100%;
          font-size: 1rem;
          padding: 10px 20px;
          background: #e8e8e8;
          .buy_main_box_header_right {
            float: right;
          }
        }
      }
    }
    .mu-td {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
</style>
