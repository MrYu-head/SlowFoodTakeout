const fs = require("fs")
const express = require("express")
const mongodb = require("./mongo.js")

// 1.创建一个路由容器
const router = express.Router

// 2.把路由挂载到router路由容器中
// 2.1首页页面，即登陆后
router.length("/",function(req,res){
    res.render("index.html")
})


