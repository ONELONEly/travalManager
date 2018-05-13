<template>
  <div id="order_details">
    <!---面包屑---->
    <mu-breadcrumb class="details_breadcrumb">
      <mu-breadcrumb-item href="javascript:void(0)">
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">查看详情</mu-breadcrumb-item>
    </mu-breadcrumb>

    <div class="demo-grid">
      <mu-table :showCheckbox="false" :fixedHeader="false">
        <mu-tbody>
          <mu-tr>
            <mu-td class="detail_text">订单编号：</mu-td>
            <mu-td >122312432</mu-td>
            <mu-td class="detail_text">预定日期：</mu-td>
            <mu-td >2017-03-12</mu-td>
            <mu-td class="detail_text">支付金额：</mu-td>
            <mu-td >￥2000</mu-td>

          </mu-tr>
          <mu-tr>
            <mu-td class="detail_text">产品类型：</mu-td>
            <mu-td >酒店</mu-td>

            <mu-td class="detail_text">出发城市：</mu-td>
            <mu-td >成都</mu-td>
            <mu-td class="detail_text">到达城市：</mu-td>
            <mu-td >成都</mu-td>
          </mu-tr>
          <mu-tr>
            <mu-td class="detail_text">酒店名称：</mu-td>
            <mu-td >皇冠假日酒店</mu-td>
            <mu-td class="detail_text">酒店电话：</mu-td>
            <mu-td >23241224</mu-td>
            <mu-td class="detail_text">酒店地址：</mu-td>
            <mu-td >成都市成华区锦江</mu-td>
          </mu-tr>
          <mu-tr>
            <mu-td class="detail_text">房型/舱位：</mu-td>
            <mu-td >大床房</mu-td>
            <mu-td class="detail_text">开始日期：</mu-td>
            <mu-td >2018-02-02</mu-td>
            <mu-td class="detail_text">结束日期：</mu-td>
            <mu-td >2018-02-03</mu-td>
          </mu-tr>
          <mu-tr>
            <mu-td class="detail_text">预定人：</mu-td>
            <mu-td >张三</mu-td>
            <mu-td class="detail_text">联系电话：</mu-td>
            <mu-td >122465543</mu-td>
            <mu-td class="detail_text">证件号：</mu-td>
            <mu-td >2356534</mu-td>
          </mu-tr>
          <mu-tr>
            <mu-td class="detail_text">订单类型：</mu-td>
            <mu-td >因公</mu-td>
            <mu-td class="detail_text">违规详情：</mu-td>
            <mu-td colspan="3" >违反提前一小时订票</mu-td>


          </mu-tr>
          <mu-tr>

            <mu-td class="detail_text">出行目的：</mu-td>
            <mu-td >出差</mu-td>
            <mu-td class="detail_text">违规原因：</mu-td>
            <mu-td >客户统一安排</mu-td>
          </mu-tr>

        </mu-tbody>
      </mu-table>

    </div>

  </div>
</template>

<script>
    export default {
        name: "Order_details"
    }
</script>
<style lang="scss">
  #order_details {
  //面包屑样式
    .details_breadcrumb {
      margin: 30px 50px;
      width: 100%;
  .mu-breadcrumb-item-link {
    color: white;
    margin: 10px;
  }
    }
    .demo-grid {
      width: 1000px;
      background-color: white;
      margin-left:-500px ;
      left: 50%;
      position: relative;
      height: auto;
    }
  .detail_text{
    text-align: right;
  }

  }
</style>
