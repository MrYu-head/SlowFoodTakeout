// app.js为服务器配置文件  包括路由设置
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
// const urlencodedParser = bodyParser.urlencoded({extended:false})


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
app.use("/html",express.static("./html"))

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


// 为登录操作添加接口
app.post("/login",function(req,res){
    var phone = req.body.phone
    var password = req.body.password
    // console.log("手机号：",phone,"密码：",password);
    if(!phone){
        // res.json({code : -1,message : "手机号不能为空。"})
        res.sendFile(__dirname + "/" + "login.html")
    // }else if(!password){
    //     res.json({code : -1,message : "密码不能为空。"})
        res.sendFile(__dirname + "/" + "login.html")
    }else{
        db.searchUser({phone : phone},function(result){
            if(result.length > 0){
                if(result[0].phone == phone && result[0].password == password){
                    // res.json({code : 0, message : "登陆成功。"})
                    res.sendFile(__dirname + "/" + "main.html")
                }else{
                    // res.json({code : -1,message : "用户名或密码错误，请重试。"})
                    res.sendFile(__dirname + "/" + "login.html")
                }
            }else{
                // res.json({code : -1,message : "用户不存在。"})
                res.sendFile(__dirname + "/" + "login.html")
            }
        });
    }
})

// 为注册添加接口
app.post('/register', function (req, res) {
    var phone = req.body.phone
    var password = req.body.password
    if (!phone) {
        // res.json({ code : -1,message: '用户名不能为空' });
        res.sendFile(__dirname + "/" +"register")
    } else if (!password) {
        // res.json({code : -1, message: '密码不能为空' });
        res.sendFile(__dirname + "/" +"register")
    } else {
        db.searchUser({ phone: phone }, function (result) {
            if (result.length > 0 && result[0].phone == phone) {
                res.json({code : -1, message: '用户已存在，可直接登录' });
            } else {
                res.json({ code: -1, message: '不存在该用户' });
                db.insertUser({ phone: phone, password: password }, function (insertResult) {
                    if (!insertResult) {
                        res.json({code : 0, message: '注册成功' });

                        // res.json({code : -1,message: '注册失败，请重试。' });
                    } else {
                        res.json({code : -1,message: '注册失败，请重试。' });

                        // res.json({code : 0, message: '注册成功' });
                    }
                })
            }
        });
    }
})





app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





