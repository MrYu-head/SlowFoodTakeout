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
————————————————
版权声明：本文为CSDN博主「Your-Nikee」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/YourNikee/article/details/103892746
})


app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





