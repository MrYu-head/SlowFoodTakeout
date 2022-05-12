// app.js用于开启服务器

const express = require("express")
const bodyParser = require("body-parser")
// 加载router.js
const router = require("./router.js")
// 创建app
const app = express()

// 将node_modules和public的文件公开
app.use("./node_modules",express.static("./node_modules/"))
app.use("")




