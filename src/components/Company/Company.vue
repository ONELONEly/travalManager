<template>
  <div id="company">
    <!--地址-->
    <mu-breadcrumb class="company_breadcrumb">
      <mu-breadcrumb-item href="javascript:void(0)">
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="javascript:void(0)">企业管理</mu-breadcrumb-item>
    </mu-breadcrumb>

    <!--主体内容盒子-->
    <div class="company_box">
      <div class="company_muse">
        <mu-flat-button label="组织架构管理" style="width: 100%;height: 50px;line-height: 50px" @click="product_search_tab_select = 'department'"/>
        <mu-flat-button label="差旅级别管理" style="width: 100%;height: 50px;line-height: 50px" @click="product_search_tab_select = 'leval'"/>
        <!--右侧菜单-->
        <!--<mu-paper class="company_right_muse">-->
          <!--<mu-menu>-->
            <!--<mu-menu-item title="组织架构管理" @click="product_search_tab_select = 'department'"/>-->
            <!--<mu-menu-item title="差旅级别管理" @click="product_search_tab_select = 'leval'"/>-->
            <!--<mu-menu-item title=" "/>-->
          <!--</mu-menu>-->
        <!--</mu-paper>-->
      </div>
      <!--左侧内容-->
      <div class="company_content">
        <mu-col class="product_search_box_content" width="70" tablet="70" desktop="70">
          <!--组织架构管理-->
          <div v-if="product_search_tab_select === 'department'">
            <!--头部搜索-->
            <div class="company_content_top">
              <mu-dropDown-menu class="company_select_order" :value="department1" @change="handleChange_department1">
                <mu-menu-item value="1" title="选择部门"/>
                <mu-menu-item value="2" title="技术部"/>
                <mu-menu-item value="3" title="行政部"/>
                <mu-menu-item value="4" title="销售部"/>
                <mu-menu-item value="5" title="财务部"/>
              </mu-dropDown-menu>

              <mu-text-field class="company_search" hintText="请输入员工编号"/>
              <mu-raised-button label="搜索" class="demo-raised-button" 搜索/>
              <mu-raised-button label="添加员工" class="demo-raised-button" @click="add_user = true" 添加员工/>
            </div>
            <!--table-->
            <div class="company_table">
              <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height"
                        :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
                        :selectable="selectable" :showCheckbox="showCheckbox">
                <mu-thead slot="header">
                  <mu-tr>
                    <mu-th tooltip="user_ID">用户名</mu-th>
                    <mu-th tooltip="user_password">密码</mu-th>
                    <mu-th tooltip="user_name">员工姓名</mu-th>
                    <mu-th tooltip="user_sex">性别</mu-th>
                    <mu-th tooltip="department">所属部门</mu-th>
                    <mu-th tooltip="leval">差旅级别</mu-th>
                    <mu-th tooltip="user_phone">手机</mu-th>
                    <mu-th tooltip="user_passcard">身份证号</mu-th>
                    <mu-th tooltip="user_email">邮箱</mu-th>
                    <mu-th tooltip="operation">操作</mu-th>


                  </mu-tr>
                </mu-thead>
                <mu-tbody>
                  <mu-tr v-for="item,index in tableData" :key="index" :selected="item.selected">
                    <mu-td>{{item.user_ID}}</mu-td>
                    <mu-td>{{item.user_password}}</mu-td>
                    <mu-td>{{item.user_name}}</mu-td>
                    <mu-td>{{item.user_sex}}</mu-td>
                    <mu-td>{{item.department}}</mu-td>
                    <mu-td>{{item.leval}}</mu-td>
                    <mu-td>{{item.user_phone}}</mu-td>
                    <mu-td>{{item.user_passcard}}</mu-td>
                    <mu-td class="email">{{item.user_email}}</mu-td>
                    <mu-td>
                      <mu-raised-button label="编辑" @click="edit_user = true"/>
                      <br/>
                      <mu-raised-button label="删除" @click="delete_user = true"/>
                    </mu-td>

                  </mu-tr>

                  <mu-dialog :open="delete_user" title="删除" @close="delete_user=false">
                    你确认要删除此员工吗？
                    <mu-flat-button slot="actions" @click="delete_user=false" primary label="取消"/>
                    <mu-flat-button slot="actions" primary @click="delete_user=false" label="确定"/>
                  </mu-dialog>

                  <mu-dialog :open="edit_user" title="编辑" @close="delete_user=false">
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">员工用户名：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="uersh12334"/><br/></mu-col>
                    </mu-row>
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">密码：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="12334"/><br/></mu-col>
                    </mu-row>
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">员工姓名：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="张小龙"/><br/></mu-col>
                    </mu-row>
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">性别：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"> <mu-radio label="男" name="group" nativeValue="simple1" v-model="sex_value2" class="demo-radio"/>
                        <mu-radio label="女" name="group" nativeValue="simple2" v-model="sex_value2"  class="demo-radio"/> <br/>
                      </mu-col>
                    </mu-row>

                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">所属部门：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"> <mu-dropDown-menu class="company_select_order" :value="department3" @change="handleChange_department3">
                        <mu-menu-item value="1" title="选择部门"/>
                        <mu-menu-item value="2" title="技术部"/>
                        <mu-menu-item value="3" title="行政部"/>
                        <mu-menu-item value="4" title="销售部"/>
                        <mu-menu-item value="5" title="财务部"/>
                      </mu-dropDown-menu></mu-col>
                    </mu-row>

                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">手机：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="122343544334"/><br/></mu-col>
                    </mu-row>
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">身份证号：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="12234334334"/><br/></mu-col>
                    </mu-row>
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">邮箱：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="12344542423"/><br/></mu-col>
                    </mu-row>

                    <mu-flat-button slot="actions" @click="edit_user=false" primary label="取消"/>
                    <mu-flat-button slot="actions" primary @click="edit_user=false" label="确定"/>
                  </mu-dialog>

                  <mu-dialog :open="add_user" title="添加员工" @close="delete_user=false">
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">员工用户名：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="uersh12334"/><br/></mu-col>
                    </mu-row>
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">密码：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="12334"/><br/></mu-col>
                    </mu-row>
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">员工姓名：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="张小龙"/><br/></mu-col>
                    </mu-row>
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">性别：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"> <mu-radio label="男" name="group" nativeValue="simple1" v-model="sex_value1" class="demo-radio"/>
                        <mu-radio label="女" name="group" nativeValue="simple2" v-model="sex_value1"  class="demo-radio"/> <br/>
                      </mu-col>
                    </mu-row>

                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">所属部门：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"> <mu-dropDown-menu class="company_select_order" :value="department2" @change="handleChange_department2">
                        <mu-menu-item value="1" title="选择部门"/>
                        <mu-menu-item value="2" title="技术部"/>
                        <mu-menu-item value="3" title="行政部"/>
                        <mu-menu-item value="4" title="销售部"/>
                        <mu-menu-item value="5" title="财务部"/>
                      </mu-dropDown-menu></mu-col>
                    </mu-row>

                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">差旅级别：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"> <mu-dropDown-menu class="company_select_order" :value="choose_leval" @change="handleChange_choose_leval">
                        <mu-menu-item value="1" title="选择差旅级别"/>
                        <mu-menu-item value="2" title="经理级别"/>
                        <mu-menu-item value="3" title="主管级别"/>
                        <mu-menu-item value="4" title="普通员工"/>

                      </mu-dropDown-menu></mu-col>
                    </mu-row>

                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">手机：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="122343544334"/><br/></mu-col>
                    </mu-row>
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">身份证号：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="12234334334"/><br/></mu-col>
                    </mu-row>
                    <mu-row gutter>
                      <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">邮箱：</mu-col>
                      <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="12344542423"/><br/></mu-col>
                    </mu-row>

                    <mu-flat-button slot="actions" @click="add_user=false" primary label="取消"/>
                    <mu-flat-button slot="actions" primary @click="add_user=false" label="确定"/>
                  </mu-dialog>

                </mu-tbody>
              </mu-table>

            </div>
          </div>
          <!--差旅级别管理-->
          <div v-if="product_search_tab_select === 'leval'">

            <mu-tabs :value="activeTab" @change="handleTabChange">
              <mu-tab value="tab1" icon="home" title="酒店"/>
              <mu-tab value="tab2" icon="flight_takeoff" title="机票"/>

            </mu-tabs>
            <div v-if="activeTab === 'tab1'">
              <!--搜索-->
              <div class="company_content_top">
                <mu-dropDown-menu class="company_select" :value="hotel_leval_manager" @change="handleChange_hotel_leval_manager">
                  <mu-menu-item value="1" title="选择级别"/>
                  <mu-menu-item value="2" title="经理级别"/>
                  <mu-menu-item value="3" title="主管级别"/>
                  <mu-menu-item value="4" title="普通员工"/>
                </mu-dropDown-menu>
                <mu-raised-button label="编辑" @click="edit_userleval = true" class="demo-raised-button" 编辑 />
                <mu-raised-button label="添加级别" @click="add_userleval = true"  class="demo-raised-button" 添加级别/>
                <div class="company_talbe">
                  <p> 一级城市：300元/间夜</p>
                  <p> 二级城市：200元/间夜</p>
                  <p>其他城市：100元/间夜</p>
                  <p>可违规预定</p>
                </div>
                <!----编辑弹出框--->
                <mu-dialog :open="edit_userleval" title="编辑差旅级别" @close="edit_userleval = false">
                  <mu-row gutter>
                  <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">一级城市：</mu-col>
                  <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="300"/>元/间夜</mu-col>
                </mu-row>
                  <mu-row gutter>
                    <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">二级城市：</mu-col>
                    <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="200"/>元/间夜</mu-col>
                  </mu-row>
                  <mu-row gutter>
                    <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">其他城市：</mu-col>
                    <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="100"/>元/间夜</mu-col>
                  </mu-row>

                  <mu-row gutter>
                    <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">可否违规：</mu-col>
                    <mu-col width="80" tablet="80" desktop="80"> <mu-radio label="可违规预定" name="group" nativeValue="simple1" v-model="choose_value" class="demo-radio"/>
                      <mu-radio label="不可违规预定" name="group" nativeValue="simple2" v-model="choose_value"  class="demo-radio"/> <br/>
                    </mu-col>
                  </mu-row>

                  <mu-flat-button slot="actions" @click="edit_userleval = false" primary label="取消"/>
                  <mu-flat-button slot="actions" primary @click="edit_userleval = false" label="确定"/>
                </mu-dialog>
                <!----添加弹出框--->
                <mu-dialog :open="add_userleval" title="添加差旅级别" @close="add_userleval = false">
                  <mu-row gutter>
                    <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">级别名称：</mu-col>
                    <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText=""/></mu-col>
                  </mu-row>
                  <mu-row gutter>
                    <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">一级城市：</mu-col>
                    <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText=""/>元/间夜</mu-col>
                  </mu-row>
                  <mu-row gutter>
                    <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">二级城市：</mu-col>
                    <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText=""/>元/间夜</mu-col>
                  </mu-row>
                  <mu-row gutter>
                    <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">其他城市：</mu-col>
                    <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText=""/>元/间夜</mu-col>
                  </mu-row>

                  <mu-row gutter>
                    <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">可否违规：</mu-col>
                    <mu-col width="80" tablet="80" desktop="80"> <mu-radio label="可违规预定" name="group" nativeValue="simple1" v-model="add_choose_value" class="demo-radio"/>
                      <mu-radio label="不可违规预定" name="group" nativeValue="simple2" v-model="add_choose_value"  class="demo-radio"/> <br/>
                    </mu-col>
                  </mu-row>
                  <mu-flat-button slot="actions" @click="add_userleval = false" primary label="取消"/>
                  <mu-flat-button slot="actions" primary @click="add_userleval = false" label="确定"/>
                </mu-dialog>
              </div>
            </div>
            <div v-if="activeTab === 'tab2'">
              <!--搜索添加级别-->
              <div class="company_content_top">
                <mu-dropDown-menu class="company_select" :value="fly_leval_manager" @change="handleChange_fly_leval_manager">
                  <mu-menu-item value="1" title="选择级别"/>
                  <mu-menu-item value="2" title="经理级别"/>
                  <mu-menu-item value="3" title="主管级别"/>
                  <mu-menu-item value="4" title="普通员工"/>
                </mu-dropDown-menu>
                <mu-raised-button label="编辑" @click="edit_fly_userleval = true" class="demo-raised-button" 编辑/>
                <mu-raised-button label="添加级别" @click="add_fly_userleval = true" class="demo-raised-button" 添加级别/>
                <div class="company_talbe">
                  <p> 出发时间前后60分钟内最低价航班</p>
                  <p>提前3天以上预定航班</p>
                  <p>6折以下价位</p>
                  <p>经济舱以下舱位</p>
                  <p>可违规预定</p>
                </div>
              </div>

              <!----编辑弹出框--->
              <mu-dialog :open="edit_fly_userleval" title="编辑差旅级别" @close="edit_fly_userleval = false">

                <mu-row gutter>

                  <mu-col width="100" tablet="100" desktop="100">出发前后<mu-text-field hintText="60"/>分钟内最低价航班</mu-col>
                </mu-row>
                <mu-row gutter>
                  <mu-col width="100" tablet="100" desktop="100">提前<mu-text-field hintText="3"/>天以上预定航班</mu-col>
                </mu-row>
                <mu-row gutter>
                  <mu-col width="100" tablet="100" desktop="100"><mu-text-field hintText="6"/>折以下航班</mu-col>
                </mu-row>
                <mu-row gutter>
                  <mu-col width="100" tablet="100" desktop="100"><mu-text-field hintText="经济舱"/>以下航班</mu-col>
                </mu-row>

                <mu-row gutter>
                  <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">可否违规：</mu-col>
                  <mu-col width="80" tablet="80" desktop="80"> <mu-radio label="可违规预定" name="group" nativeValue="simple1" v-model="choose_value2" class="demo-radio"/>
                    <mu-radio label="不可违规预定" name="group" nativeValue="simple2" v-model="choose_value2"  class="demo-radio"/> <br/>
                  </mu-col>
                </mu-row>
                <mu-flat-button slot="actions" @click="edit_fly_userleval = false" primary label="取消"/>
                <mu-flat-button slot="actions" primary @click="edit_fly_userleval = false" label="确定"/>
              </mu-dialog>
              <!----添加弹出框--->
              <mu-dialog :open="add_fly_userleval" title="添加差旅级别" @close="add_fly_userleval = false">
                <mu-row gutter>
                  <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">级别名称：</mu-col>
                  <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText=""/></mu-col>
                </mu-row>
                <mu-row gutter>

                  <mu-col width="100" tablet="100" desktop="100">出发前后<mu-text-field hintText=""/>分钟内最低价航班</mu-col>
                </mu-row>
                <mu-row gutter>
                  <mu-col width="100" tablet="100" desktop="100">提前<mu-text-field hintText=""/>天以上预定航班</mu-col>
                </mu-row>
                <mu-row gutter>
                  <mu-col width="100" tablet="100" desktop="100"><mu-text-field hintText=""/>折以下航班</mu-col>
                </mu-row>
                <mu-row gutter>
                  <mu-col width="100" tablet="100" desktop="100"><mu-text-field hintText=""/>以下航班</mu-col>
                </mu-row>

                <mu-row gutter>
                  <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">可否违规：</mu-col>
                  <mu-col width="80" tablet="80" desktop="80"> <mu-radio label="可违规预定" name="group" nativeValue="simple1" v-model="add_choose_value2" class="demo-radio"/>
                    <mu-radio label="不可违规预定" name="group" nativeValue="simple2" v-model="add_choose_value2"  class="demo-radio"/> <br/>
                  </mu-col>
                </mu-row>
                <mu-flat-button slot="actions" @click="add_fly_userleval = false" primary label="取消"/>
                <mu-flat-button slot="actions" primary @click="add_fly_userleval = false" label="确定"/>
              </mu-dialog>
            </div>

          </div>
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
        delete_user: false,
        edit_user:false,
        add_user:false,
        edit_userleval:false,
        edit_fly_userleval:false,
        add_fly_userleval:false,
        add_userleval:false,
        department1:'1',
        department2:'1',
        department3:'1',
        sex_value1:'',
        sex_value2:'',
        choose_value:'',
        add_choose_value:'',
        choose_value2:'',
        choose_leval:'1',
        add_choose_value2:'',
        hotel_leval_manager:'1',
        fly_leval_manager:'1',
        value: '',
        activeTab: 'tab1',
        product_search_tab_select: 'department',
        tableData: [
          {
            user_ID: '2139812',
            user_password:'334321',
            user_name: '张晓梅',
            user_sex: '女',
            department: '销售部',
            leval: '普通员工',
            user_phone: '66778993',
            user_passcard:233243423,
            user_email: 'zxm@company.cn',
            operation: ''

          },
          {
            user_ID: '2139813',
            user_password:'334321',
            user_name: '张聪',
            user_sex: '男',
            department: '技术部',
            leval: '主管级别',
            user_phone: '66898993',
            user_passcard:242345456,
            user_email: 'zc@company.cn',
            operation: ''

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
      handleChange_department1(value) {

        this.department1 = value

      },
      handleChange_department2(value) {

        this.department2 = value

      },
      handleChange_department3(value) {

        this.department3 = value

      },
      handleChange_choose_leval(value) {

        this.choose_leval = value

      },
      handleChange_hotel_leval_manager(value) {

        this.hotel_leval_manager = value

      },
      handleChange_fly_leval_manager(value) {

        this.fly_leval_manager = value

      },

      handleTabChange(val) {
        this.activeTab = val
      },
      handleActive() {
        window.alert('tab active')
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
        .company_content_top {
          display: inline-block;
          width: 100%;
          padding: 10px 20px;
          .company_select {
            float: left;
            margin-right: 20px;
            width: 400px;
          }

          .mu-dropDown-menu {
            display: inline-block;
          }

          .demo-raised-button {
            margin-top: 12px;
            background-color: #2196f3;
            color: white;
            margin-left: 40px;
          }
          .company_talbe {
            width: 400px;
            height: 300px;
            margin-top: 30px;
            text-align: left;
            margin-left: 50px;
          }

        }
      }
    }
  }
</style>
