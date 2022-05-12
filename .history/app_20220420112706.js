// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const express = require("express")
const morgan = require("morgan")
const fs = require("fs")
const router = require("./router/index")

const app = express()

app.use(router)
app.use(morgan("dev"))
app.use(express.static(__dirname + '/'))
// console.log("上部分成功");

// fs实现登陆验证
fs.readFile("./user.json",function(err,data){
    if(err){
        userArr = []
    }else{
        userArr = JSON.parse(data)
    }
})

app.post("/login",function(req,res,next){
    var phone
})



app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





