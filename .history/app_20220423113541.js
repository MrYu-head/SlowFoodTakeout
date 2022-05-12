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
// app.use(express.json())

// 设置类型，再解析之前进行拦截
// app.post('/',function setType(req,res,next){
//     req.headers['content-type']="application/json";
//     next();
// },express.json(), function(req, res, next) {
//     console.log('req.body',req.body);
// });
  
// 打印日志文件
app.use(morgan("dev"))
app.use("/",express.static('./'))
app.use("/html",express.static("/"))

// 主页面为登陆界面
app.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})
// 登陆页面
app.get('/login.html',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})
// 注册界面
app.get('/register.html',function(req,res){
    res.sendFile(__dirname + '/' + 'register.html')
})
// 网站页面
app.get('/html/main.html',function(req,res){
    res.sendFile(__dirname + '/' + 'main.html')
})
// 菜单界面
app.get('/html/menu.html',function(req,res){
    res.sendFile(__dirname + '/' + 'menu.html')
})


// 为登录操作添加接口
app.post("/login",function(req,res){
    var phone = req.body.phone
    var password = req.body.password
    // console.log("req.body:",req.body);
    // console.log(phone,password);

    if(!phone){
        alert("手机号不能为空。")
        res.json({message : "手机号不能为空。"})
    }else if(!password){
        alert("密码不能为空。")
        res.json({message : "密码不能为空。"})
    }else{
        db.searchUser({phone : phone},function(result){
            if(result.length > 0){
                if(result[0].phone == phone && result[0].password == password){
                    // res.location('http://127.0.0.1:5500/html/main')
                    res.location('./html/main')
                    // res.json({message : "登陆成功。"})
                    res.end()
                }else{
                    res.json({message : "用户名或密码错误，请重试。"})
                }
            }else{
                res.json({message : "用户不存在。"})
            }
        });
    }
})

// 为注册添加接口
app.post('/register', function (req, res) {
    var phone = req.body.phone
    var password = req.body.password
    if (!phone) {
        res.json({ message: '用户名不能为空' });
    } else if (!password) {
        res.json({ message: '密码不能为空' });
    } else {
        db.searchUser({ phone: phone }, function (result) {
            if (result.length > 0 && result[0].phone == phone) {
                res.json({ message: '用户已存在，可直接登录' });
            } else {
                res.json({ code: -1, message: '不存在该用户' });
                db.insertUser({ phone: phone, password: password }, function (insertResult) {
                    console.log("这是插入的数据",insertResult)
                    if (!insertResult) {
                        res.json({ message: '注册失败，请重试。' });
                    } else {
                        res.json({ message: '注册成功' });
                        res.end()
                    }
                })
            }
        });
    }
})





app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





