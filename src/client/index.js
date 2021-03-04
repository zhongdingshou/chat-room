import io from 'socket.io-client'//引入socket.io客户端库
const chitchat = {//初始化
  msgObj:document.getElementsByClassName("body-wrapper")[0],//
  username:null,//定义用户名
  userid:null,//生成UID，唯一
  color:null,//头像颜色
  socket:null,//socket对象
  onlineCount:0,//在线人数
  onlineUsers:null,//在线用户
  msgArr:[],//消息数组

  //主动退出
  logout:function(){
    this.socket.emit('disconnect');//向服务器发送退出
    location.reload();//刷新页面
  },
  //提交聊天消息内容
  submit:function(msg){
    if(msg !== ''){//内容不为空
      let obj = {//初始化json数组
        userid: this.userid,//赋值当前用户的userid
        username: this.username,////赋值当前用户的username
        msg: msg,//赋值当前用户的msg消息内容
        color: this.color//赋值当前用户的生成的color
      };
      this.socket.emit('message', obj);//向服务器发送
    } else {//内容为空
      alert("请输入内容")
    }
  },
  //更新系统消息，本例中在用户加入、退出的时候调用
  updateSysMsg:function(o){
    //更新在线用户
    this.onlineUsers=o.onlineUsers;
    //更新在线人数
    this.onlineCount = o.onlineCount;
  },


  //初始化
  init:function(){
    //将localStorage中的信息赋值给本身数组
    this.userid = localStorage.getItem('userid');
    this.username = localStorage.getItem('name');
    this.color = localStorage.getItem('color');
    //如果没有生成userid，则跳转到跟目录，在跳转到登陆页
    if (!this.userid) {
      window.location.href='/';
      return;//返回
    }

    //连接websocket后端服务器
    this.socket = io.connect('ws://'+location.hostname+':3000');
    //告诉服务器端有用户登录
    this.socket.emit('login', {userid:this.userid, username:this.username,color:this.color});

    //监听新用户登录
    this.socket.on('login', function(obj){
      chitchat.updateSysMsg(obj);//更新信息
      chitchat.msgArr.push(obj);//推送数组
    });

    //监听用户退出
    this.socket.on('logout', function(obj){
      chitchat.updateSysMsg(obj);//更新信息
      chitchat.msgArr.push(obj);//推送数组
    });

    //监听消息发送
    this.socket.on('message', function(obj){
      chitchat.msgArr.push(obj);//推送数组
    });
  }
};

export default chitchat//暴露出去给其他文件
