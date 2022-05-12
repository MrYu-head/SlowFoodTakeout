// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const express = require("express")
const morgan = require("morgan")
const fs = require("fs")
const router = require("./router/index")
const { Db } = require("mongodb")

const app = express()

app.use(router)
app.use(morgan("dev"))
app.use(express.static(__dirname + '/'))
// console.log("上部分成功");

// 设置了主页面为登陆界面
app.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'index.html')
})

// app.get('/register.ht,ml',function(req,res){
//     res.sendFile(__dirname + '/' + 'register.html')
// })


// 为登录操作添加接口
app.post("/login",function(req,res,next){
    var userPhone = req.body.phone
    var userPassword = req.body.password
    if(!userPhone){
        res.json({code : -1,message : "手机号不能为空。"})
    }else if(!userPassword){
        res.json({code : -1,message : "密码不能为空。"})
    }else{
        Db.searchUser({phone : userPhone},function(result){
            if(result.length > 0){
                if(result[0].phone == userPhone && result[0].password == userPassword){
                    res.json({
                        code : 0,
                        message : 
                    })
                }
            }
        })
    }
})



app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





