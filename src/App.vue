<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html {
    height: 100%;
    background: #F5F5F5;
  }
  body {
    height: 100%;
  }
  #app {
    height: 100%;
    width:100%;
  }
</style>
