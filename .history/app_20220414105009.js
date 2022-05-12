// app.js是核心模块
// 包括：创建服务、相关配置、模板引擎、挂载路由、监听端口启动服务等。

const express = require("express")
const router = require("./router")
const bodyParser = require("body=parser")

const app = express()

app.use("/node_modules/",express.static("./node_modules/"))
app.use("/punlic",express.static("./public/"))

// 配置模板引擎和body-parser，切必须要在app.user(router)挂载路由之前
app.engine("html",require("express-art-template"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 挂载路由到app服务中
app.use(router)

// 监听端口，启动服务
app.listen(5500,function (){
    console.log("服务器已启动，监听5500端口。");
})



