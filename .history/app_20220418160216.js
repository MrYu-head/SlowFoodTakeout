// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const express = require("express")
const morgan = require("morgan")
const app = express()

app.use(morgan("dev"))
app.use(express.static(__dirname + '/src'))

app.get('/login',(req,res) => {
    let phone = req.query.phone
    let password = req.query.password
    console.log(req.url);
})

app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





