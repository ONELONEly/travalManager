<template>
  <div>
    <mu-breadcrumb>
      <mu-breadcrumb-item href="/">首页</mu-breadcrumb-item>
      <mu-breadcrumb-item href="/">审批管理</mu-breadcrumb-item>
    </mu-breadcrumb>

    <div class="box">
    <div class="menu">
      <mu-flat-button label="已审批" class="demo-flat-button"/>
      <mu-flat-button label="待审批" class="demo-flat-button"/>
    </div>
    <div class="content">
      <mu-select-field v-model="game1" :labelFocusClass="['label-foucs']" label="订单类型">
        <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
      </mu-select-field>
    </div>

    </div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="TAB ONE"/>
      <mu-tab value="tab2" title="TAB TWO"/>
      <mu-tab value="tab3" @active="handleActive" title="TAB ACTIVE"/>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <h2>Tab One</h2>
      <p>
        这是第一个 tab
      </p>
    </div>
    <div v-if="activeTab === 'tab2'">
      <h2>Tab Two</h2>
      <p>
        这是第二个 tab
      </p>
    </div>
    <div v-if="activeTab === 'tab3'">
      <h2>Tab Three</h2>
      <p>
        这是第三个 tab
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Approval",
    data() {
      return {
        activeTab: 'tab1'
      }
    },
    methods: {
      handleTabChange(val) {
        this.activeTab = val
      },
      handleActive() {
        window.alert('tab active')
      }
    },
    data () {
      return {
        game1: 0,
        game2: ['1'],
        game3: '3',
        list: ['全部订单', '酒店订单', '机票订单']
      }
    }
  }

</script>

<style lang="scss">
  .menu{
   float: left;
    display: inline-block;
  width: 100px;
    height: auto;
    background-color: #e8eaf6;

  }
  .box{
    align-content: center;
  }
  .content{
    float: left;
    width: auto;
    height: auto;

  }
  .container{
    display: flex;
  }
  .demo-flat-button {
    margin: 12px;
  }


</style>
