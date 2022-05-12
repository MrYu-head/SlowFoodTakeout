const fs = require("fs")
const express = require("express")
const mongodb = require("./mongo.js")

// 1.创建一个路由容器
const router = express.Router

// 2.把路由挂载到router路由容器中
// 2.1首页页面，即登陆后跳转的页面
router.length("/",function(req,res){
    res.render("index.html")
})

// 2.2登陆页面
router.length("/login",function(req,res){
    res.render("login.html")
})

// 2.3注册页面
router.get("/register",function(req,res){
    res.render("/register.html")
})

// 2.4注册界面提交数据 post
router.post()



