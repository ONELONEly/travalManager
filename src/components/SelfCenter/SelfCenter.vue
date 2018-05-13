<template>
  <div id="self">
    <mu-breadcrumb class="self_breadcrumb">
      <mu-breadcrumb-item href="javascript:void(0)">

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

                    <mu-th style="text-align: center" class="my_standard_item_name">个人信息</mu-th>

                  </mu-tr>
                </mu-thead>
                <mu-tbody>
                  <mu-tr>
                    <mu-td class="left_text">用户名:</mu-td>
                    <mu-td class="right_text"><span v-if="userMessage != null">{{userMessage.desc}}</span></mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">姓名:</mu-td>
                    <mu-td class="right_text"><span v-if="userMessage != null">{{userMessage.dsca}}</span></mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">性别:</mu-td>
                    <mu-td class="right_text"><span v-if="userMessage != null">{{userMessage.sex}}</span></mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">部门编号:</mu-td>
                    <mu-td class="right_text"><span v-if="userMessage != null">{{userMessage.dept}}</span></mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">手机号:</mu-td>
                    <mu-td class="right_text"><span v-if="userMessage != null">{{userMessage.phone}}</span></mu-td>
                  </mu-tr>
                  <mu-tr>

                    <mu-td class="left_text">邮箱:</mu-td>
                    <mu-td class="right_text"><span v-if="userMessage != null">{{userMessage.email}}</span></mu-td>
                  </mu-tr>
                  <mu-tr>
                    <mu-td class="left_text">身份证号:</mu-td>
                    <mu-td class="right_text"><span v-if="userMessage != null">{{userMessage.number}}</span></mu-td>
                  </mu-tr>

                  <mu-tr class="button_self">
                    <mu-raised-button label="编辑"  @click="dialog3 = true" class="demo-raised-button" primary/>
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

                    <mu-th style="text-align: center" class="my_standard_item_name">我的差旅标准</mu-th>

                  </mu-tr>
                </mu-thead>
                <mu-tbody>

                  <mu-tr>
                    <mu-td class="left_text">机票</mu-td>
                    <mu-td class="right_text">酒店</mu-td>
                  </mu-tr>

                  <mu-tr>
                    <mu-td class="left_text" ><div v-if="airTicketStage != null">出发时间前后<span class="gree_message">{{airTicketStage.priOne}}</span>分钟内最低价航班</div></mu-td>
                    <mu-td class="right_text"><div v-if="hotelStage != null">一线城市：<span class="gree_message">{{hotelStage.priOne}}</span>元/间夜</div></mu-td>
                  </mu-tr>

                  <mu-tr>
                    <mu-td class="left_text"><div v-if="airTicketStage != null">提前<span class="gree_message">{{airTicketStage.priTwo}}</span>天以上预定航班</div></mu-td>
                    <mu-td class="right_text"><div v-if="hotelStage != null">二线城市：<span class="gree_message">{{hotelStage.priTwo}}</span>元/间夜</div></mu-td>
                  </mu-tr>

                  <mu-tr>
                    <mu-td class="left_text"><div v-if="airTicketStage != null"><span class="gree_message">{{airTicketStage.priThree}}</span>折以下价位</div></mu-td>
                    <mu-td class="right_text"><div v-if="hotelStage != null">其它城市：<span class="gree_message">{{hotelStage.priThree}}</span>元/间夜</div></mu-td>
                  </mu-tr>

                  <mu-tr>
                    <mu-td class="left_text"><div v-if="airTicketStage != null"><span class="gree_message">{{airTicketStage.priFour}}</span>以下舱位</div></mu-td>
                    <mu-td class="right_text"><div v-if="hotelStage != null"><span class="gree_message" v-if="hotelStage.priFour == 1">可违规预定</span><span class="gree_message" v-else>不可违规预定</span></div></mu-td>
                  </mu-tr>

                  <mu-tr>
                    <mu-td class="left_text"><div v-if="airTicketStage != null"><span class="gree_message" v-if="airTicketStage.priFive == 1">可违规预定</span><span class="gree_message" v-else>不可违规预定</span></div></mu-td>
                  </mu-tr>
                </mu-tbody>
              </mu-table>

            </div>
          </div>
          <!--常用旅客-->
          <div v-if="product_search_tab_select === 'cylk'">
            <div class="self_talbe">
              <mu-table :showCheckbox="false">
                <mu-thead>
                  <mu-tr>
                    <mu-th style="text-align: left" class="my_standard_item_name">常用旅客</mu-th>
                  </mu-tr>
                  <mu-tr>
                    <mu-td >姓名</mu-td>
                    <mu-td >电话</mu-td>
                    <mu-td >身份证号</mu-td>
                  </mu-tr>
                </mu-thead>
                <mu-tbody v-for="alwaysUser in alwaysUsers">
                  <mu-tr>
                    <mu-td >{{alwaysUser.name}}</mu-td>
                    <mu-td >{{alwaysUser.phone}}</mu-td>
                    <mu-td >{{alwaysUser.number}}</mu-td>
                  </mu-tr>
                </mu-tbody>
                <mu-tr class="button_self">
                  <mu-raised-button label="添加" @click="dialog1 = true" class="button_style" />
                </mu-tr>

              </mu-table>

            </div>

          </div>
          <!--常用地址-->
          <div v-if="product_search_tab_select === 'cydz'">
            <div class="self_talbe">
              <mu-table :showCheckbox="false">
                <mu-thead>
                  <mu-tr>
                    <mu-th style="text-align: left" class="my_standard_item_name">常用地址</mu-th>
                  </mu-tr>

                  <mu-tr>
                    <mu-td >地址</mu-td>
                  </mu-tr>
                </mu-thead>
                <mu-tbody v-for="alwaysAddr in alwaysAddrs">
                  <mu-tr>
                    <mu-td>{{alwaysAddr.address}}</mu-td>
                  </mu-tr>
                </mu-tbody>
                <mu-tr class="button_self">
                  <mu-raised-button label="添加" @click="dialog2 = true" class="button_style" />
                </mu-tr>
              </mu-table>

            </div>
          </div>
          <mu-dialog :open="dialog1" title="添加常用旅客" @close="dialog1 = false">

            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">姓名：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入姓名" v-model="name"/></mu-col>
            </mu-row>
            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">电话：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入电话号码" v-model="phone"/></mu-col>
            </mu-row>

            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">身份证号：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入身份证号" v-model="number"/></mu-col>
            </mu-row>
            <mu-flat-button slot="actions" @click="dialog1 = false" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="insertAlwaysUser()" label="确定"/>
          </mu-dialog>
          <mu-dialog :open="dialog2" title="添加常用地址" @close="dialog2 = false">

            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">地址：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入地址" v-model="addr"/></mu-col>
            </mu-row>

            <mu-flat-button slot="actions" @click="dialog2 = false" primary label="取消"/>
            <mu-flat-button slot="actions"  @click="insertAlwaysAddr()" label="确定"/>
          </mu-dialog>
          <mu-dialog :open="dialog3" title="编辑个人信息" @close="dialog3 = false">
            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">手机号：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入用户名"/><br/></mu-col>
            </mu-row>
            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">邮箱：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入邮箱"/><br/></mu-col>
            </mu-row>
            <mu-row gutter>
              <mu-col width="20" tablet="20" desktop="20" style="font-size: 16px;height: 50px;line-height: 50px">身份证：</mu-col>
              <mu-col width="80" tablet="80" desktop="80"><mu-text-field hintText="输入身份证"/><br/></mu-col>
            </mu-row>

            <mu-flat-button slot="actions" @click="dialog3 = false" primary label="取消"/>
            <mu-flat-button slot="actions"  @click="dialog3 = false" label="确定"/>
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
        value: '1',
        dialog1:false,
        dialog2:false,
        dialog3:false,
        product_search_tab_select: 'info',
        product_search_tab_select: 'clbz',
        product_search_tab_select: 'cylk',
        product_search_tab_select: 'cydz',
        userMessage:null,
        airTicketStage:null,
        hotelStage:null,
        alwaysUsers:[],
        alwaysAddrs:[],
        name:'',
        phone:'',
        number:'',
        addr:''
      }
    },
    created(){
      this.$http.post("/user/message").then((res) => {
        this.userMessage = res.data.data;
      });
      this.$http.post('/user/stage').then((res) =>{
        if(res.data.data !== null) {
          this.airTicketStage = res.data.data.airTicketStage;
          this.hotelStage = res.data.data.hotelStage;
        }
      });
      this.queryAlwaysUser();
      this.queryAlwaysAddr();
    },
    methods: {
      handleChange(value) {
        this.value = value
      },
      unselect() {
        this.$refs.table.unSelectAll()
      },
      insertAlwaysUser(){
        this.$http.post("/user/insertAlwaysUser",{headers:{'contentType':'application/json'}},JSON.stringify({
          name:this.name,
          phone:this.phone,
          number:this.number
        })).then((res) => {
          if(res.data.code === 200){
            this.dialog1 = false;
            this.queryAlwaysUser();
          }else{
            alert("异常发生");
          }
        });
      },
      insertAlwaysAddr(){
        this.dialog2 = false;
      },
      queryAlwaysUser(){
        this.$http.post('/user/queryAlwaysUser',this.$qs.stringify({page:1,limit:10})).then((res) =>{
          this.alwaysUsers = res.data.data;
        });
      },
      queryAlwaysAddr(){
        this.$http.post('/user/queryAlwaysAddr',this.$qs.stringify({page:1,limit:10})).then((res) =>{
          this.alwaysAddrs = res.data.data;
        });
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
        .my_standard_item_name {
          color: #00bfff;
          font-size: 1rem;
          padding: 0;
          margin: 5px 0;
        }
        .gree_message {
          color:#008000;
          font-size: large;
          font-weight: bold;
        }
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

          }
          .button_style{
            background-color: #2196f3;
            color: white;
          }
        }

      }
    }

  }
</style>
