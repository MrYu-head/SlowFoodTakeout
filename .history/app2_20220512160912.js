// app.js为服务器配置文件 并且全局使用路由
// 登录和注册逻辑分开实现


const port = 5500
const hostName = '127.0.0.1'
const express = require("express")
const morgan = require("morgan")
const fs = require("fs")
const bodyParser = require("body-parser")
const db = require("./db")
const path = require("path")
const { connect } = require("http2")
const cookieParser = require("cookie-parser")
const cookieParser = require(cookieParser)


const app = express()

// 后端程序中处理浏览器的跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if(req.method == 'OPTIONS'){
        // 让options请求快速返回
        res.sendStatus(200)
    }else{
        next();
    }
});


// 解析application/json
app.use(bodyParser.json())
// 解析url编码
app.use(bodyParser.urlencoded({extended:false}))
  
// 打印日志文件
app.use(morgan("dev"))
app.use("/",express.static('./'))
app.use("/views",express.static("./views"))
// 引用路由
// app.use('/login',loginRouter)
// app.use("/",require("./login.html"))
app.use("/login",require("./router/login"))
app.use("/register",require("./router/register"))
app.use("/user_inform_search",require("./router/user_inform_search"))
app.use("/user_inform_update",require("./router/user_inform_update"))



// 主页面为登陆界面
app.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})

// // 网站页面
// app.get('/main',function(req,res){
//     res.sendFile(__dirname + '/' + 'main.html')
// })
// // 菜单界面
// app.get('/menu',function(req,res){
//     res.sendFile(__dirname + '/' + 'views/menu.html')
// })
// // 订单界面
// app.get('/order',function(req,res){
//     res.sendFile(__dirname + '/' + '/views/order.html')
// })
// // 个人信息界面
// app.get('/user_inform',function(req,res){
//     res.sendFile(__firname + '/' + '/views/user_information2.html')
// })
// app.get('/user_inform_update',function(req,res){
//     res.sendFile(__firname + '/' + '/views/user_information2.html')
// })



app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





