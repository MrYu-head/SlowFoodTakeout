const express = require("express")
const path = require("path")

let app = express()
// 监听端口,127.0.0.1:5500
app.listen(27017)  
console.log("监听端口5500");

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// 读取文件
app.use(express.static(path.join(__dirname,"../static")))

app.post("/login",require("../router/login"))
