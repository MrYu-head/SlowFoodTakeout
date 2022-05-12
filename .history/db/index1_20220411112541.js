const express = require("express")
const path = require("path")

let app = express()
// 监听端口,127.0.0.1:5500
app.listen(5500)  

app.use(express.json())
app.use(express)

