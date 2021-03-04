<template>
  <div class="body-wrapper" id="box">
    <div v-for="msgObj in chitchat.msgArr">
      <div v-if="msgObj.login">
        <system-msg :msg="msgObj.user.username" :where="1"></system-msg>
      </div>
      <div v-if="msgObj.logout">
        <system-msg :msg="msgObj.user.username" :where="0"></system-msg>
      </div>
      <div v-if="!msgObj.login&&!msgObj.logout&&msgObj.msg">
        <other-msg v-if="msgObj.userid!==chitchat.userid" :name="msgObj.username" :msg="msgObj.msg" :color="msgObj.color"></other-msg>
        <self-msg v-if="msgObj.userid===chitchat.userid" :msg="msgObj.msg" :color="msgObj.color"></self-msg>
      </div>
    </div>
    <!-- <other-msg></other-msg> -->
  </div>
</template>

<script>
  import OtherMsg from './OtherMsg';//引入他人消息组件
  import SelfMsg from './SelfMsg';//引入自己消息组件
  import SystemMsg from './SystemMsg';//引入系统消息组件
  import chitchat from '../client/index';//引入客户端接口
    export default {
      name: "Body",
      components:{
        OtherMsg,
        SelfMsg,
        SystemMsg
      },
      data () {
        return {
          chitchat
        }
      },
      updated:function(){
          this.$nextTick(function(){//让消息滑动条保持在最底
          let div = document.getElementById('box');
          div.scrollTop = div.scrollHeight;
        })
      },
    }
</script>

<style >
  .body-wrapper{
    background-color: #f6f6f6;
    height:100%;
    position: relative;
    min-height: 200px;
    overflow-y: scroll;
    border-left:1px solid #DCDDDE;
    border-right:1px solid #DCDDDE;
    padding-bottom: 40px;
  }
</style>
