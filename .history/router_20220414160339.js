const fs = require("fs")
const express = require("express")
const mongo = require("./mongo.js")

// 1.创建一个路由容器
const router = express.Router

// 2.把路由挂载到router路由容器中
// 2.1首页页面，即登陆后跳转的页面
router.get("/",function(req,res){
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
router.post("/login",function(req,res){
    // 把数据保存到mongodb中，req.body就是保存的内容
    new mongo(req.body).save(function(err){
        if(err){
            return res.status(500).send("服务器出错，请重试。")
        }
        res.redirect("/login")
    })
})

// 2.5登陆界面提交数据  post
router.post("/",function(req,res){
    var phone = req.body.phone
    var password = req.body.password
    mongo.findOne({phone : req.body.phone,password : req.body.password},function(err,ret){
        if(err){
            return res.status(500).send("服务器出错，请重试。")
        }else{
            // 如果手机号或者密码有误，则ret就是null
            if(ret === null){
                res.send("手机号或密码错误，请重试。")
            }else{
                // 如果账号密码正确，ret返回的就是数据库中的数据对象
                // 获取这个手机号，渲染到首页页面
                var phoneNum = ret.phone
                res.render("main.html",{
                    phoneNum : phoneNum
                })
            }
        }
    })
})

// 导出router模块
module.exports = router

