// login.js为登陆验证

const express = require("express")
const app = express()
const mongoose = require("mongoose");
require("./connect.js");
require("./modle.js");

// User为model的name
const User = mongoose.model("user")
// 由于mongoose的默认promise已经弃用了，这一句时为了避免出现警告
mongoose.Promise = global.Promise

// 设置登录视图
app.get("/login",function(req,res){
    res.sendFile(__dirname + "/" + "login.html")
})

// 处理登录请求
app,get("/login",function(req,res){
    var phone = req.query.phone
    var password = req.query.password
    User.findOne({phone:phone,password:password},function(err,res){
        if(res == null){
            res.sendFile(__dirname + "/" + "false.html")
        }else{
            res.sendFile(__dirname + "/" + "true.html")
        }
    })
})


// 设置注册试图
app.get("/register.html",function(req,res){
    res.sendFile(__dirname + "/" + "register.html")
})

// 处理注册请求
app,get("/register",function(req,res){
    var phone = req.query.phone
    var password = req.query.password
    var user = new User({
        phone : phone,
        password : password
    })
    User.save(function(err,res){
        if(res == null){
            res.sendFile(__dirname + "/" + "false.html")
        }else{
            res.sendFile(__dirname + "/" + "true.html")
        }
    })
})


// 监听端口
const server = app.listen(5500,function(){
    console.log("start!");
})


