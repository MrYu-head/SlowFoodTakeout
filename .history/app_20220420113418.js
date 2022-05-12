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

app.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'index.html')
})



app.post("/login",function(req,res,next){
    var login = userArr.findIndex(function(v,i,a){
        return v.phon
    })
})



app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





