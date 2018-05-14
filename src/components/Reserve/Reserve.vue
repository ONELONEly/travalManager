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
          <span class="reserve_name">订单名字</span>
          <div class="reserve_time_box">
            <div class="reserve_time_se_box">
              <div class="reserve_time">开始时间</div>
              <div>其他信息</div>
            </div>
            <mu-icon value="arrow_forward"></mu-icon>
            <div class="reserve_time_se_box">
              <div class="reserve_time">结束时间</div>
              <div>其他信息</div>
            </div>
          </div>
          <!--类型-->
          <span class="reserve_type">经济舱9折</span>
          <!--价格-->
          <span class="reserve_price">￥3800</span>
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
      <mu-raised-button label="提交" style="float: right;margin: 20px" primary/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reserve',
    // 数据
    data() {
      return {
        // 出行原因
        travelReason: "",
        // 违规原因
        breachReason: ""
      }
    },
    // 计算变量
    computed: {
      user() {
        return this.$store.state.user.loginUser.user;
      }
    }
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
