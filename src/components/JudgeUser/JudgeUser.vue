<template>
  <div id="empty"></div>
</template>

<script>
  export default {
    name: "Empty",
    // 数据
    data() {
      return {
        isManager:false
      }
    },
    mounted() {
      let userLogin = this.$store.state.user.loginUser;
      if (userLogin != null) {
        this.isManager = userLogin.isManager;
        if(this.isManager){
          this.$router.push("/home/approval");
        }else {
          this.$router.push("/home/buy");
        }
      }else {
        this.$http.post('/loginStatus').then( (res) => {
          if(res.data.data === null){
            this.$router.push('/');
          }else {
            this.$store.commit('setLoginUser', res.data.data);
            this.isManager = this.$store.state.user.loginUser.isManager;
            if (this.$store.state.user.loginUser.isManager){
              this.$router.push("/home/approval");
            }else {
              this.$router.push("/home/buy");
            }
          }
        });
    }
    let postData = JSON.stringify({
      address:'上海'
    });
    let queryData = this.$qs.stringify({
      page : 1,
      limit : 5,
      key : ''
    });
  },
  }
</script>

<style scoped>

</style>
