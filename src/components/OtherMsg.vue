<template>
  <div class="other-wrap">
    <span class="-header" :style="{'background-color':color}">{{name.slice(-1)}}</span>
    <span class="-name">{{name}}</span>
    <div class="-msg">{{msg}}</div>
  </div>
</template>

<script>
    export default {
      name: "OtherMsg",
      props:["msg","name","color"]
    }
</script>

<style scoped>
  .other-wrap:before,
  .other-wrap:after {
    content: "";
    display: table;
  }
  .other-wrap {
    padding: 6px 6px 16px 6px;
    height: auto;
    *zoom: 1;
  }
  .other-wrap:after {
    clear: both;
  }
  .-header{
    display: inline-flex;
    float: left;
    align-items: center;
    justify-content: center;
    background-color: #905;
    height:50px;
    width: 50px;
    border-radius: 50%;
    font-weight: bolder;
  }
  .-name{
    float: left;
    margin-top:-4px;
    margin-left: 12px;
    font-size: 14px;
    padding: 0 2px;
    color: #999;
  }
  .-msg {
    display: block;
    position: relative;
    background-color: #fff;
    padding: 10px;
    margin-left: 62px;
    margin-top: 22px;
    border-radius: 6px;
    word-break:break-all;
    white-space:pre-wrap;
    word-wrap:break-word;
    line-height: 26px;
    font-family : sans-serif;
    max-width: 65%;
    width: auto;
    font-size: 16px;
  }
  .-msg:before{
     content:'';
     display: inline-block;
     height: 0;
     width: 0;
     border-right: solid 10px #fff;
     border-top: solid 6px transparent;
     border-bottom : solid 6px transparent;
     position: absolute;
     top: 6px;
     left: -10px;
   }
</style>
