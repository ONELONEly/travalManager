<template>
    <div id="company">
      <!--地址-->
      <mu-breadcrumb class="company_breadcrumb">
        <mu-breadcrumb-item href="javascript:void(0)">
          <mu-icon value="home" :size="16"/>
          首页
        </mu-breadcrumb-item>
        <mu-breadcrumb-item href="javascript:void(0)">企业管理</mu-breadcrumb-item>
      </mu-breadcrumb>

  <!--主体内容盒子-->
  <div class="company_box">
    <div class="company_muse">
      <!--右侧菜单-->
      <mu-paper class="company_right_muse">
        <mu-menu>
          <mu-menu-item title="组织架构管理"/>
          <mu-menu-item title="差旅级别管理"/>
          <mu-menu-item title=" "/>
        </mu-menu>
      </mu-paper>
    </div>
    <!--左侧内容-->
    <div class="company_content">
      <!--头部搜索-->
      <div class="company_content_top">
        <mu-dropDown-menu class="company_select_order" :value="value" @change="handleChange">
          <mu-menu-item value="1" title="选择部门"/>
          <mu-menu-item value="2" title="技术部"/>
          <mu-menu-item value="3" title="行政部"/>
          <mu-menu-item value="4" title="销售部"/>
        </mu-dropDown-menu>

        <mu-text-field class="company_search" hintText="请输入员工编号"/>
        <mu-raised-button label="搜索" class="demo-raised-button" 搜索/>
        <mu-raised-button label="添加部门" class="demo-raised-button" 添加部门/>
        <mu-raised-button label="添加员工" class="demo-raised-button" 添加员工/>
      </div>
           <!--table-->
      <div class="company_table">
        <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height"
                  :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
                  :selectable="selectable" :showCheckbox="showCheckbox">
          <mu-thead slot="header">
            <mu-tr>
              <mu-th tooltip="user_ID">员工编号</mu-th>
              <mu-th tooltip="user_name">员工姓名</mu-th>
              <mu-th tooltip="user_sex">性别</mu-th>
              <mu-th tooltip="department">所属部门</mu-th>
              <mu-th tooltip="leval">差旅级别</mu-th>
              <mu-th tooltip="user_power">预定权限</mu-th>
              <mu-th tooltip="user_phone">手机</mu-th>
              <mu-th tooltip="user_email">邮箱</mu-th>
              <mu-th tooltip="operation">操作</mu-th>


            </mu-tr>
          </mu-thead>
          <mu-tbody>
            <mu-tr v-for="item,index in tableData" :key="index" :selected="item.selected">
              <mu-td>{{item.user_ID}}</mu-td>
              <mu-td>{{item.user_name}}</mu-td>
              <mu-td>{{item.user_sex}}</mu-td>
              <mu-td>{{item.department}}</mu-td>
              <mu-td>{{item.leval}}</mu-td>
              <mu-td>{{item.user_power}}</mu-td>
              <mu-td>{{item.user_phone}}</mu-td>
              <mu-td>{{item.user_email}}</mu-td>
              <mu-td>{{item.operation}}</mu-td>

            </mu-tr>
          </mu-tbody>
        </mu-table>

      </div>
    </div>
  </div>.
    </div>

</template>

<script>
  export default {
    data() {
      return {
        value: '1',
        tableData: [
          {
            user_ID:'2139812',
            user_name: '张晓梅',
            user_sex: '女',
            department: '销售部',
            leval: '普通员工',
            user_power: '仅为自己',
            user_phone: '66778993',
            user_email: 'zxm@company.cn',
            operation:''

          },
          {
            user_ID:'2139813',
            user_name: '张聪',
            user_sex: '男',
            department: '技术部',
            leval: '主管级别',
            user_power: '仅为自己',
            user_phone: '66898993',
            user_email: 'zc@company.cn',
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
      unselect() {
        this.$refs.table.unSelectAll()
      }

    }

  }
</script>

<style lang="scss">
  #company {
    //面包屑
    .company_breadcrumb {
      margin: 30px 50px;
      width: 100%;
      .mu-breadcrumb-item-link {
        color: white;
        margin: 10px;
      }
    }
    .company_box {
      width: 100%;
      height: calc(100% - 86px);
      //左侧菜单样式
      .company_muse {
        float: left;
        display: inline-block;
        width: 168px;
        height: auto;
        background-color: white;
        margin-left: 100px;
        border-radius: 5px;
        .company_right_muse {
          display: inline-block;
          margin: 10px 50px 0 0;
          width: 168px;
        }
      }
      //右侧内容样式
      .company_content {
        float: left;
        width: 1000px;
        height: auto;
        margin-left: 50px;
        background-color: white;
        border-radius: 10px;
        //右侧内容头部样式
        .company_content_top {
          display: inline-block;
          width: 100%;
          padding: 10px 20px;
          .company_select_order {
            float: left;
            margin-right: 20px;
          }
          .company_search {
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
    }
  }
</style>
