<template>
  <div id="buy">
    <mu-breadcrumb class="buy_breadcrumb">
      <mu-breadcrumb-item href="/">
        <mu-icon value="home" :size="16"/>
        首页
      </mu-breadcrumb-item>
      <mu-breadcrumb-item href="/">出行预定</mu-breadcrumb-item>
    </mu-breadcrumb>
  </div>
</template>

<script>
    export default {
        name: "content"
    }
</script>

<style lang="scss">
  #buy {
    .buy_breadcrumb {
      margin: 30px 50px;
      width: 100%;
      .mu-breadcrumb-item-link {
        color: white;
        margin: 10px;
      }
    }

  }
</style>
