
var app = require('express')();
var http = require("http").Server(app);
var io = require('socket.io')(http);

// var https = require('https').Server(options,app);

// app.all('*',function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
//   res.header('Access-Control-Allow-Headers', 'X-Token, Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Credentials','true');   // 新增
//   if (req.method === 'OPTIONS') {
//     res.send(200); /*让options请求快速返回*/
//   }
//   else {
//     next();
//   }
// });


app.get('/', function(req, res){
  res.send('<h1>Welcome Realtime Server</h1>');
});

//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 0;

//监听客户端的连接事件
io.on("connection",function(socket){
  let ip = socket.handshake.address.toString();
  let address = '';
  if (ip.indexOf("f") !== -1) {
    address = ip.substring(7);
  } else {
    address = ip
  }
  console.log("Have a new connection to join");

  //监听新用户加入
  socket.on('login', function(obj){
    //将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
    socket.name = obj.userid;

    //检查在线列表，如果不在里面就加入
    if(!onlineUsers.hasOwnProperty(obj.userid)) {
      onlineUsers[obj.userid] = obj;
      //在线人数+1
      onlineCount++;
    }

    //向所有客户端广播用户加入
    io.emit('login', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj,login:true});
    console.log(obj.username+"("+address+")"+'加入了聊天室'+ '\n');
  });

  //监听用户退出
  socket.on('disconnect', function(){
    //将退出的用户从在线列表中删除
    if(onlineUsers.hasOwnProperty(socket.name)) {
      //退出用户的信息
      var obj = onlineUsers[socket.name];

      //删除
      delete onlineUsers[socket.name];
      //在线人数-1
      onlineCount--;

      //向所有客户端广播用户退出
      io.emit('logout', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj,logout:true});
      console.log(obj.username+"("+address+")"+'退出了聊天室'+ '\n');
    }
  });


  //监听用户发布聊天内容
  socket.on('message', function(obj){
    //向所有客户端广播发布的消息
    io.emit('message', obj);
    console.log(obj.username+"("+address+")"+'说：'+obj.msg + '\n');
  });
});
  //服务器监听3000端口
  http.listen(3000, function(){
    console.log('listening on *:3000');
  });
console.log("websocket server is running" + '\n');
