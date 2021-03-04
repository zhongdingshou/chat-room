<template>
  <div class="head-wrapper">
    <div class="-left">
        <i class="iconfont icon-keaide">消息 <span class="red">{{chitchat.msgArr.length}}</span></i>
    </div>
    <div class="-mid">
      <p class="group-name">chat room({{chitchat.onlineCount}})</p>
    </div>
    <div class="-right">
      <i class="iconfont icon-group" @click="close()">X</i>
    </div>
  </div>
</template>

<script>
  import chitchat from '../client/index';//引入客户端接口
  export default {
      name: "Head",
      data () {
        return {
          chitchat:chitchat
        }
      },
      methods:{
        close(){//退出
          if (localStorage) {//清除localStorage内容
            localStorage.removeItem('name');
            localStorage.removeItem('userid');
            localStorage.removeItem('color')
          }
          this.chitchat.logout();//告诉服务器要退出
          this.$router.push('/login')//跳转到登陆页
        }
      }
    }
</script>

<style scoped>
  .head-wrapper {
    background-color: #34352c;
    height: 50px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
  }
  .-left {
    display: flex;
    flex-flow: row wrap;
    flex-shrink: 0;
    height: 100%;
    width: 90px;
    min-width: 70px;
    align-items:center;
    justify-content: space-around;
  }
  .icon-keaide{
    font-size: 20px !important;
    color: #fff;
  }
  a {
    text-decoration: none;
  }
  .-mid{
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    color: #fff;
  }
  .red{
    font-style:normal;
    background: red;
    border-radius: 14px;
    padding: 3px;
    color:#fff;
  }
  .group-name{
    font-size: 22px !important;
    color: #fff;
  }
  .-right {
    display: flex;
    align-items: center;
    height: 100%;
    width: 70px;
    justify-content: center;
  }
  .icon-group{
    cursor:pointer;
    font-size: 22px !important;
    color: #fff;
  }
</style>
