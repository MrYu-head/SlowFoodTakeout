// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const http = require("http")
const control = require("./controller/indexControl")
// const express = require("express")
// const fs = require("fs")
// const morgan = require("morgan")
// const path = require("path")
// const app = express()

const app = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/plain');
    let fileType = req.url.split('.');
    if (fileType[1]=='html') {
        contrl.sendHtml(fileType[0],res)
    }else  if(fileType[1]=='css'){
        contrl.sendCss(fileType[0],res)
    }else  if(fileType[1]=='js'){
        contrl.sendJs(fileType[0],res)
    }else  if(fileType[1]=='jpg' || fileType[1]=='png'){
        contrl.sendJs(fileType[0],res)
    }
})


app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





