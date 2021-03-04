<template>
  <div class="body">
    <img class="-icon" alt="login" src="../assets/logo.png" />
    <div class="-title">
      chat room
    </div>
    <div class="-name">
      <label>你的昵称：
        <input type="text" v-model="name"  placeholder="10字以内，不填则随机生成">
      </label>
    </div>
    <div class="-login">
      <span class="-btn" @click="login()">登录</span>
    </div>
  </div>
</template>

<script>
  import chitchat from '../client/index';//引入客户端接口
  import {randomColor,genUid} from '../util/index';//引入常用函数
    export default {
      name: "Login",
      data () {
        return {
          name:'',
          color:'',
        }
      },
      created(){
        if (localStorage) {//清除旧的localStorage
          localStorage.removeItem('name');
          localStorage.removeItem('userid');
          localStorage.removeItem('color')
        }
      },
      methods:{
        RandomChinese(n){//获取随机数
          let chars = ['一','二','三','四','五','六','七','八','九','零'];
          let res = "";
          for(let i = 0; i < n ; i ++) {
            let id = Math.floor(Math.random()*chars.length);
            res += chars[id];
          }
          return res;
        },
        login(){//登陆操作
          if (!this.name.trim()) {//如果没有输入昵称
            this.name = this.RandomChinese(5);//获取4个随机数作为名称
          } else {//如果有
            this.name=this.name.slice(0,10)//截取前10内容
          }
          if (localStorage) {//设置localStorage值
            localStorage.setItem('name',this.name);
            localStorage.setItem('color',randomColor());
            localStorage.setItem('userid',genUid())
          }
          chitchat.init();//初始化
          this.$router.push('/main');//跳转到主页
        }
      }
    }
</script>

<style scoped>
  .body {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0 auto;
  }
  .-icon{
    height:80px;
    width: 80px;
    margin: 18px auto;
  }
  .-title{
    height: 80px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    color: #999;
  }
  .-name{
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #999;
    border-top: solid 1px rgba(0, 0, 0, 0.05);
  }
  .-name label{
    width: auto;
    color: #999;
  }
  input{
    box-sizing: border-box;
    width: 174px;
    height: 30px;
    border: none;
    outline: none;
    padding: 5px;
    color: #666;
    background-color: rgba(0,0,0,0.02);
  }
  .-login {
    display: flex;
    height: 80px;
    align-items: center;
    font-size: 16px;
    cursor:pointer;
    color: #999;
  }
  .-btn{
    background-color: #3CAF36;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 40px;
    margin: 10px auto;
    color: #fff;
    font-weight: bolder;
    border-radius: 12px;
  }
</style>
