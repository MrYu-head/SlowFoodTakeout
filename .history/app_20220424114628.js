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






app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})


module.exports = app


