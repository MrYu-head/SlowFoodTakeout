// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const express = require("express")
const fs = require("fs")
const morgan = require("morgan")
const path = require("path")
const app = express()

app.use(morgan("dev"))
// 将morgan挂载到服务器上，并将监听内容打印在控制台
app.use("/",express.static((__dirname + "/src"))
// app.use(express.static(__dirname + "/src"))
// 挂载使用express的static方法，__dirname相当于当前目录的根目录，其作用是在根目录下的src文件夹中查找服务器请求的文件。
// app.use(function(req,res){
//     res.send("/index")
// })

// app.get("/index",(req,res) => {
//     console.log(req.url);
// })
app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





