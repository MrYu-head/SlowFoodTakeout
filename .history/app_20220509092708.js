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


const app = express()

// 后端程序中处理浏览器的跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// 解析application/json
app.use(bodyParser.json())
// 解析url编码
app.use(bodyParser.urlencoded({extended:false}))
  
// 打印日志文件
app.use(morgan("dev"))
app.use("/",express.static('./'))
app.use("/views",express.static("./views"))


// 主页面为登陆界面
app.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})
// 登陆页面
app.get('/login',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})
// 注册界面
app.get('/register',function(req,res){
    res.sendFile(__dirname + '/' + 'register.html')
})
// 网站页面
app.get('/main',function(req,res){
    res.sendFile(__dirname + '/' + 'main.html')
})
// 菜单界面
app.get('/menu',function(req,res){
    res.sendFile(__dirname + '/' + 'views/menu.html')
})
// 订单界面
app.get('/order',function(req,res){
    res.sendFile(__dirname + '/' + '/views/order.html')
})
// 个人信息界面
app.get('/user_inform',function(req,res){
    res.sendFile(__firname + '/' + 'views/user_information.html')
})


// 1.为登录操作添加接口
app.post("/login",function(req,res){
    var phone = req.body.phone
    var password = req.body.password
    if(!phone && !password){
        res.json({code:0,message:"请确认输入正常。"})
    }else{
        db.searchUser({phone : phone},function(result){
            if(result.length > 0){
                if(result[0].phone == phone && result[0].password == password){
                    res.json({code:1,message:"登陆成功！"})
                }else{
                    res.json({code:-1,message:"手机号或密码错误，请重试。"})
                }
            }else{
                res.json({code:-1,message:"手机号或密码不正确，请重新输入。"})
            }
        });
    }
})

// 2.为注册添加接口
app.post('/register', function (req, res) {
    var phone = req.body.phone
    var password = req.body.password
    if (!phone && !password) {
        res.json({code:0,message:"请确认输入正常。"})
    }else {
        db.searchUser({ phone: phone }, function (result) {
            if(result.length > 0 && result[0].phone == phone) {
                // 注册成功，返回登陆
                res.json({code:1,message:"注册成功，可以登录。"})
            }else{
                res.json({code:-1,message:"注册失败，请重试。"})
                db.insertUser({ phone: phone, password: password }, function (insertResult) {
                    if (!insertResult) {
                        res.json({code:1,message:"注册成功，可以登录。"})
                    } else {
                        res.json({code:-1,message:"注册失败，请重试。"})
                    }
                })
            }
        });
    }
})

// 3.个人信息修改接口
app.post('/user_inform',function(req,res){
    res.sendFile(__dirname + '/' + 'main.html')
})

// 从数据库获取shop表中的商家以及菜单信息展示在menu.html中
// app.post('/menu',function(erq,res){
//     db.searchUser
// })



app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





