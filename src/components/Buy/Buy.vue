<template>
  <div id="buy">
    <!--书签-->
    <mu-breadcrumb class="breadcrumb">
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
                    <mu-radio label="因公" name="group" nativeValue="public" v-model="publicOrPrivate"/>
                    <mu-radio label="因私" name="group" nativeValue="private" v-model="publicOrPrivate"/>
                  </mu-col>
                </mu-row>
                <!--去返城市-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 56px;line-height: 56px">去返城市</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-text-field class="product_search_input" hintText="起始地"/>
                    <span style="margin: 0 5px">-</span>
                    <mu-text-field class="product_search_input" hintText="目的地"/>
                  </mu-col>
                </mu-row>
                <!--出发日期-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 56px;line-height: 56px">出发日期</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-date-picker class="product_search_input" hintText="选择日期"/>
                  </mu-col>
                </mu-row>
                <!--搜索按钮-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-raised-button label="搜索" primary @click="$router.push('/home/plane-ticket')"/>
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
                    <mu-radio label="因公" name="group" nativeValue="public" v-model="publicOrPrivate"/>
                    <mu-radio label="因私" name="group" nativeValue="private" v-model="publicOrPrivate"/>
                  </mu-col>
                </mu-row>
                <!--目的地-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 56px;line-height: 56px">目的地</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-text-field class="product_search_input" hintText="地点"/>
                  </mu-col>
                </mu-row>
                <!--入住时间-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 56px;line-height: 56px">入住时间</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-date-picker class="product_search_input" hintText="入住"/>
                    <span style="margin: 0 5px">-</span>
                    <mu-date-picker class="product_search_input" hintText="离开"/>
                  </mu-col>
                </mu-row>
                <!--关键字-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                    <span style="font-size: 16px;height: 56px;line-height: 56px">关键字</span>
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-text-field hintText="如位置\酒店名\品牌"/>
                  </mu-col>
                </mu-row>
                <!--搜索按钮-->
                <mu-row class="product_search_item" gutter>
                  <mu-col width="25" tablet="25" desktop="25">
                  </mu-col>
                  <mu-col width="75" tablet="75" desktop="75">
                    <mu-raised-button label="搜索" primary/>
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
              <mu-tr>
                <mu-td>1</mu-td>
                <mu-td>2018-02-02</mu-td>
                <mu-td>机票</mu-td>
                <mu-td>上海</mu-td>
                <mu-td>北京</mu-td>
                <mu-td>审核通过</mu-td>
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
              <p class="my_standard_info">提前三天预订</p>
              <p class="my_standard_info">机票折扣限制：6折</p>
            </div>
            <div class="my_standard_item">
              <p class="my_standard_item_name">酒店</p>
              <p class="my_standard_info">一线城市：300元/天</p>
              <p class="my_standard_info">二线城市：200元/天</p>
              <p class="my_standard_info">三线城市：100元/天</p>
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
        moreText: '更多 >'
      }
    },
    methods: {
      handleTabChange(val) {
        this.activeTab = val
      },
      handleActive() {
        window.alert('tab active')
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
              color: red;
              font-size: 1rem;
              padding: 0;
              margin: 5px 0;
            }
            .my_standard_info {
              margin: 0 0 0 15px;
              padding: 0;
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
  }

  // 书签
  .breadcrumb {
    padding: 30px 50px;
    width: 100%;
    text-align: left;
  }
  .mu-breadcrumb-item-link {
    color: white;
    margin: 10px;
  }
</style>
