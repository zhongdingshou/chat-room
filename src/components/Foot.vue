<template>
  <div class="foot-wrapper">
    <div>
      <textarea required="required" contentEditable="true" cols="15" wrap="hard" rows="4" class="chat-input" v-model.trim="msg">
      </textarea>
    </div>
    <span class="chat-sub" :class="{'primary':!!msg}"  @click="msg&&send(msg)">发送</span>
  </div>
</template>

<script>
  import chitchat from '../client/index';//引入客户端接口
    export default {
      name: "Foot",
      data () {
        return {
          msg:''
        }
      },
      methods:{
        send(msg){//发送消息
          if (msg!=='') {//不为空
            chitchat.submit(msg);
            this.msg='';//发送完输入框赋值为空
          } else {
            alert("请输入内容")
          }
        }
      }
    }
</script>

<style scoped>
  .foot-wrapper {
    position: relative;
    background-color: #f1f1f1;
    height: 80px;
    flex-shrink: 0;
    display: flex;
    padding: 10px 10px;
    justify-content: space-between;
    border-top: solid 1px rgba(0, 0, 0, 0.1);
  }
  .foot-wrapper > div {
    height: 100%;
    width: 83%;
  }
  .chat-input{
    height: 100%;
    width: 100%;
    border-radius: 10px;
    outline: none;
    border:none;
    box-sizing: border-box;
    padding: 5px;
    font-size: 16px;
  }
  .chat-sub{
    display: flex;
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: rgba(0,0,0,0.1);
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 50px;
    border-radius: 10px;
    cursor:pointer;
    outline: none;
  }
  .primary{
    background-color: #3CAF36;
    color:#fff;
  }
</style>
