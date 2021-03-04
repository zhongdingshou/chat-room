<template>
  <div class="self-wrap">
    <span class="-header" :style="{'background-color':color}">我</span>
    <div class="-msg">{{msg}}</div>
  </div>
</template>

<script>
    export default {
      name: "SelfMsg",
      props:["msg","color"]
    }
</script>

<style scoped>
  .self-wrap {
    padding: 6px 6px 16px 6px;
    overflow: hidden;
  }
  .-header{
    float: right;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #905;
    height:50px;
    width: 50px;
    border-radius: 50%;
    font-weight: bolder;
  }
  .-msg{
    background-color: #fff;
    padding: 10px;
    float: right;
    position: relative;
    left: -12px;
    top: 0;
    border-radius: 6px;
    max-width: 65%;
    font-family : sans-serif;
    word-break:keep-all;
    white-space:pre-wrap;
    word-wrap:break-word;
    font-size: 16px;
    line-height: 26px;
  }
  .-msg:before{
     content:'';
     display: inline-block;
     height: 0;
     width: 0;
     border-left: solid 10px #fff;
     border-top: solid 6px transparent;
     border-bottom : solid 6px transparent;
     position: absolute;
     top:5px;
     left: 100%;
   }
</style>
