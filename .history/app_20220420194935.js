// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const express = require("express")
const morgan = require("morgan")
const fs = require("fs")
const bodyParser = require("body-parser")
const db = require("./db")
const path = require("path")
const urlencodedParser = bodyParser.urlencoded({extended:false})


const app = express()

// 后端程序中处理浏览器的跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// 解析url编码
// app.use(bodyParser.urlencoded({extended:false}))
// 解析application/json
// app.use(bodyParser.json())
// app.use(express.json())

// 设置类型，再解析之前进行拦截
// app.post('/',function setType(req,res,next){
//     req.headers['content-type']="application/json";
//     next();
// },express.json(), function(req, res, next) {
//     console.log('req.body',req.body);
// });
  

app.use(morgan("dev"))
app.use("/",express.static('./'))

// 主页面为登陆界面
app.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})
app.get('/login.html',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})
// app.get('/register.html',function(req,res){
//     res.sendFile(__dirname + '/' + 'register.html')
// })



// 为登录操作添加接口
app.post("/",urlencodedParser,function(req,res){
    var usersPhone = req.body.userPhone
    var usersPassword = req.body.userPwd
    console.log("req.body:",req.body);
    console.log(usersPhone,usersPassword);

    if(!usersPhone){
        res.json({code : -1,message : "手机号不能为空。"})
    }else if(!usersPassword){
        res.json({code : -1,message : "密码不能为空。"})
    }else{
        db.searchUser({phone : usersPhone},function(result){
            if(result.length > 0){
                if(result[0].phone == usersPhone && result[0].password == usersPassword){
                    res.json({code : 0,message : "登陆成功。"})
                }else{
                    res.json({code : -1,message : "用户名或密码错误，请重试。"})
                }
            }else{
                res.json({code : -1,message : "用户不存在。"})
            }
        });
    }
})


// // 为注册添加接口
// app.post('/process_register', urlencodedParser, function (req, res) {
//     var userName = req.body.userName;
//     var pwd = req.body.pwd;
//     if (!userName) {
//         res.json({ code: -1, message: '用户名不能为空' });
//     } else if (!pwd) {
//         res.json({ code: -1, message: '密码不能为空' });
//     } else {
//         db.searchUser({ name: userName }, function (result) {
//             if (result.length > 0 && result[0].name == userName) {
//                 res.json({ code: -1, message: '用户已存在，可直接登录' });
//             } else {
//                 // res.json({ code: -1, message: '不存在该用户' });
//                 db.insertUser({ name: userName, pwd: pwd }, function (insertResult) {
//                     console.log(insertResult)
//                     if (insertResult.insertedCount > 0) {
//                         res.json({ code: 0, message: '注册成功' });
//                     } else {
//                         res.json({ code: -1, message: '注册失败，请重新注册' });
//                     }
//                 })
//             }
//         });
//     }
// })





app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





