// 路由文件，浏览器访问的地址

const express = require("express")
const router = express.Router()
const app = require('../app2')
const db = require('../db')

// 配置路由
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
app.get('/views/menu',function(req,res){
    res.sendFile(__dirname + '/' + 'views/menu.html')
})
// 订单界面
app.get('/views/order',function(req,res){
    res.sendFile(__dirname + '/' + '/views/order.html')
})



// 暴露路由模块
module.exports = router