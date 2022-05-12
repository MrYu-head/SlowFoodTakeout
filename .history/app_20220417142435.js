// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const http = require("http")

const server = http.createServer((req,res) => {
    // 通过http模块的creataServer方法擦黄建服务器，req为请求对象，res为响应对象
    console.log("服务器已启动！");
})
server.listen(port,hostName,() => {
    console.log("服务器已启动，监听" + );
})





