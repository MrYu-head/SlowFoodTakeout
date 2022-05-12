// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const express = require("express")
// const fs = require("fs")
const morgan = require("morgan")
// const path = require("path")
const app = express()

const app = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/plain');
    routers.pageRoute(req,res)
})


app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





