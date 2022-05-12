// app.js是核心模块
// 包括：创建服务、相关配置、模板引擎、挂载路由、监听端口启动服务等。

const express = require("express")
const router = require("./router")
const bodyParser = require("body=parser")

const app = express()

app.use("/node_modules/",express.static("./node_modules/"))
app.use("/punlic",express.static("./public/"))

// 配置模板引擎和body-parser


