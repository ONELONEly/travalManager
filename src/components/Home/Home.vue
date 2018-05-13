<template>
  <div id="home">
    <img class="home_bg" src="../../assets/home_bg.jpg">
    <mu-appbar class="home_bar" title="企业差旅管理平台">
      <mu-flat-button label="出行预定" slot="right" @click="toPath('出行预定')"/>
      <mu-flat-button label="订单管理" slot="right" @click="toPath('订单管理')"/>
      <mu-flat-button label="审批管理" slot="right" @click="toPath('审批管理')"/>
      <mu-flat-button label="企业管理" slot="right" @click="toPath('企业管理')"/>
      <img class="home_head" src="../../assets/head_img.png" slot="right" @click="toPath('个人中心')">
    </mu-appbar>
    <div class="home_main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    // 数据
    data() {
      return {
      }
    },
    created(){
      this.$http.post('/loginStatus').then( (res) => {
        this.$store.commit('setLoginUser',res.data.data);
      });
      let postData = JSON.stringify({
        address:'上海'
      });
      let queryData = this.$qs.stringify({
        page : 1,
        limit : 5,
        key : ''
      });
    },
    // 方法
    methods: {
      toPath(path) {
        if (path == '企业管理')
        {
          this.$router.push('/home/company')
        }
       else if (path == '订单管理')
        {
          this.$router.push('/home/order')
        }
        else if (path == '出行预定')
        {
          this.$router.push('/home/buy')
        }
        else if (path == '审批管理')
        {
          this.$router.push('/home/approval')
        }
        else if (path == '个人中心')
        {
          this.$router.push('/home/selfcenter')
        }
      }
    }
  }
</script>

<style lang="scss">
  #home {
    width: 100%;
    height: 100%;
    // 背景
    .home_bg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100;
      width: 100%;
      z-index: -1;
    }

    .home_bar {
      background-color: transparent;
      .home_head {
        margin: 0 20px;
        height: 30px;
        width: 30px;
      }
    }
    // 主干
    .home_main {
      width: 100%;
      height: calc(100% - 64px);
    }
  }

</style>
