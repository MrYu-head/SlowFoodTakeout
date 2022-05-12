// 使用express搭建服务器

const express = require("express")

const server = express()

// 访问服务器,get或post
// get请求如下：
server.get('/',function(req,res){
    if(err) throw err
    res.send("get请求成功。")
})

// post请求如下：
server.post('/',function(req,res){
    if(err) throw err
    res.send("post请求成功。")
})

// 绑定端口
server.l



