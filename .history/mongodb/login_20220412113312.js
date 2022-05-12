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
    var name = 
})


