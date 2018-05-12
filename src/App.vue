<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import "../node_modules/animate.css/animate.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: fixed;
    height: 100%;
    width: 100%;
    min-width:1366px;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    min-width:1200px;
  }
</style>
