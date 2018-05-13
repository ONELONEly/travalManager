<template>
  <div id="self">
    <mu-breadcrumb class="self_breadcrumb">
      <mu-breadcrumb-item href="javascript:void(0)">
        <mu-icon value="home" :size="16"/>
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">个人中心</mu-breadcrumb-item>
    </mu-breadcrumb>
    <!--主体内容盒子-->
    <div class="self_box">
      <div class="self_muse">
        <!--右侧菜单-->
        <mu-paper class="self_right_muse">
          <mu-menu>
            <mu-menu-item title="个人信息" @click="product_search_tab_select = 'info'"/>
            <mu-menu-item title="差旅标准" @click="product_search_tab_select = 'clbz'"/>
            <mu-menu-item title=" 常用旅客" @click="product_search_tab_select = 'cylk'"/>
            <mu-menu-item title=" 常用地址" @click="product_search_tab_select = 'cydz'"/>
          </mu-menu>
        </mu-paper>
      </div>
      <!--左侧内容-->
      <div class="self_content">


        <mu-col class="product_search_box_content" width="70" tablet="70" desktop="70">
          <!--个人信息-->
          <div v-if="product_search_tab_select === 'info'">
            <div class="self_talbe">
              <mu-table :showCheckbox="false">
                <mu-thead>
                  <mu-tr>

                    <mu-th style="text-align: center">个人信息</mu-th>

                  </mu-tr>
                </mu-thead>
                <mu-tbody>
                  <mu-tr>
                    <mu-td class="left_text">用户名:</mu-td>
                    <mu-td class="right_text">232443212</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">姓名:</mu-td>
                    <mu-td class="right_text">张三</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">性别:</mu-td>
                    <mu-td class="right_text">男</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">部门:</mu-td>
                    <mu-td class="right_text">技术部</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">手机号:</mu-td>
                    <mu-td class="right_text">13808992478</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">邮箱:</mu-td>
                    <mu-td class="right_text">328983290@qq.com</mu-td>
                  </mu-tr>
                  <mu-tr>
                    <mu-td class="left_text">身份证号:</mu-td>
                    <mu-td class="right_text">4382959839205821</mu-td>
                  </mu-tr>

                  <mu-tr class="button_self">
                    <mu-raised-button label="编辑" class="demo-raised-button" primary/>
                  </mu-tr>

                </mu-tbody>
              </mu-table>

            </div>
          </div>
          <!--差旅标准-->
          <div v-if="product_search_tab_select === 'clbz'">
            <div class="self_talbe">
              <mu-table :showCheckbox="false">
                <mu-thead>
                  <mu-tr>

                    <mu-th style="text-align: center">我的差旅标准</mu-th>

                  </mu-tr>
                </mu-thead>
                <mu-tbody>
                  <mu-tr>
                    <mu-td class="left_text">机票：主管级别</mu-td>
                    <mu-td class="right_text">酒店：主管级别</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">出发时间前后60分钟内最低价航班</mu-td>
                    <mu-td class="right_text">一线城市：300元/间夜</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">提前3天以上预定航班</mu-td>
                    <mu-td class="right_text">二线城市：200元/间夜</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">6折以下价位</mu-td>
                    <mu-td class="right_text">其他城市：100元/间夜</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">经济舱以下舱位</mu-td>
                    <mu-td class="right_text">可违规预定</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">可违规预定</mu-td>

                  </mu-tr>




                </mu-tbody>
              </mu-table>

            </div>
          </div>
          <!--常用旅客-->
          <div v-if="product_search_tab_select === 'cylk'">
            <div class="self_talbe">
              <mu-table :showCheckbox="false" >
                <mu-thead>
                  <mu-tr>

                    <mu-th style="text-align: left">常用旅客</mu-th>

                  </mu-tr>
                </mu-thead>
                <mu-tbody>
                  <mu-tr>
                    <mu-td >序号</mu-td>
                    <mu-td >姓名</mu-td>
                    <mu-td >电话</mu-td>
                    <mu-td >身份证号</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td >1</mu-td>
                    <mu-td >张晓梅</mu-td>
                    <mu-td >13489832</mu-td>
                    <mu-td >6659082134</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td >2</mu-td>
                    <mu-td >王小二</mu-td>
                    <mu-td >124245435</mu-td>
                    <mu-td >2439835809</mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td >3</mu-td>
                    <mu-td >李晓东</mu-td>
                    <mu-td >12454434</mu-td>
                    <mu-td >55645232</mu-td>
                  </mu-tr>
                  <mu-tr class="button_self">
                    <mu-raised-button label="添加" @click="dialog1 = true" class="button_style" />
                  </mu-tr>

                </mu-tbody>
              </mu-table>

            </div>

          </div>
          <!--常用地址-->
          <div v-if="product_search_tab_select === 'cydz'">
            <div class="self_talbe">
              <mu-table :showCheckbox="false">
                <mu-thead>
                  <mu-tr>

                    <mu-th style="text-align: left">常用地址</mu-th>

                  </mu-tr>
                </mu-thead>
                <mu-tbody>
                  <mu-tr>
                    <mu-td >序号</mu-td>
                    <mu-td >地址</mu-td>

                  </mu-tr>
                  <mu-tr>

                    <mu-td >1</mu-td>
                    <mu-td >成都市青城山镇东软大道</mu-td>

                  </mu-tr>
                  <mu-tr>

                    <mu-td >2</mu-td>
                    <mu-td >成都市青羊区</mu-td>
                  </mu-tr>



                  <mu-tr class="button_self">
                    <mu-raised-button label="添加" @click="dialog2 = true" class="button_style" />
                  </mu-tr>
                </mu-tbody>
              </mu-table>

            </div>
          </div>
          <mu-dialog :open="dialog1" title="添加常用旅客" @close="dialog1 = false">

            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">姓名：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入姓名"/><br/></mu-col>
            </mu-row>
            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">电话：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入电话号码"/><br/></mu-col>
            </mu-row>
            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">身份证号：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入身份证号"/><br/></mu-col>
            </mu-row>
            <mu-flat-button slot="actions" @click="dialog1 = false" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="dialog1 = false" label="确定"/>
          </mu-dialog>
          <mu-dialog :open="dialog2" title="添加常用地址" @close="dialog2 = false">

            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">地址：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入地址"/><br/></mu-col>
            </mu-row>

            <mu-flat-button slot="actions" @click="dialog2 = false" primary label="取消"/>
            <mu-flat-button slot="actions"  @click="dialog2 = false" label="确定"/>
          </mu-dialog>

        </mu-col>


      </div>
    </div>
    .
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog1: false,
        dialog2: false,
        value: '1',
        product_search_tab_select: 'info',
        product_search_tab_select: 'clbz',
        product_search_tab_select: 'cylk',
        product_search_tab_select: 'cydz',
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
  #self {
    .self_breadcrumb {
      margin: 30px 50px;
      width: 100%;
      .mu-breadcrumb-item-link {
        color: white;
        margin: 10px;
      }
    }
    .self_box {
      width: 100%;
      height: calc(100% - 86px);
      //左侧菜单样式
      .self_muse {
        float: left;
        display: inline-block;
        width: 168px;
        height: auto;
        background-color: white;
        margin-left: 100px;
        border-radius: 5px;
        .self_right_muse {
          display: inline-block;
          margin: 10px 50px 0 0;
          width: 168px;
        }
      }
      //右侧内容样式
      .self_content {
        float: left;
        width: 1000px;
        height: auto;
        margin-left: 50px;
        background-color: white;
        border-radius: 10px;
        //右侧内容头部样式
        .self_content_top {
          display: inline-block;
          width: 100%;
          padding: 10px 20px;
          .self_select_order {
            float: left;
            margin-right: 20px;
          }
          .self_search {
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

        .self_talbe {
          width: 800px;
          position: relative;
          left: 50%;
          margin-left: -400px;

          .left_text {
            text-align: center;
          }
          .right_text {
            text-align: center;
          }
          .button_self {
            text-align: right;

          .button_style{
            background-color: #2196f3;
            color: white;
            margin-top: 10px;
          }

          }

        }

      }
    }

  }
</style>
