<template>
    <div class="main">
      <chat-head></chat-head>
      <chat-body></chat-body>
      <chat-foot></chat-foot>
    </div>
</template>

<script>
  import ChatHead from './Head';//引入头部
  import ChatBody from './Body';//引入主体
  import ChatFoot from './Foot';//引入底部
  import chitchat from '../client/index';//引入客户端接口
    export default {
      name: "Main",
      components:{
        ChatHead,
        ChatBody,
        ChatFoot
      },
      created(){
        if (!localStorage) {//如果localStorage未设置
          this.$router.push('/login');//跳转登陆页
          this.chitchat.logout();//告诉服务器要退出
        }
        setTimeout(() => {//一秒后查看在线人数
          if (!chitchat.onlineCount) {//当为0时
            this.$router.push('/login');//跳转登陆页
            this.chitchat.logout();//告诉服务器要退出
          }
        }, 900);
      }
    }
</script>

<style scoped>
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
  .main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100%;
    width:100%;
    max-width: 652px;
    margin: 0 auto;
    justify-content: space-between;
  }
</style>
