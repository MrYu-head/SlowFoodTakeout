// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const http = require("http")
const fs = require("fs")  

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/plain')
    console.log();


    // 通过http模块的creataServer方法创建建服务器，req为请求对象，res为响应对象

    // // 1.设置响应头
    // // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    // // 2.发送文件
    // // res.write(fs.readFile('./src/index.html','utf-8',(err,data) => {
    // //     console.log("读取文件",data);
    // // }))
    // if(req.url == '/src/index.html'){
    //     fs.readFile('./src/index.html','utf-8',(err,data) => {
    //         res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    //         res.write(data)
    //         // res.end()
    //         console.log("/data.");
    //     })
    // }
    
    // console.log(req.url);

    // // 结束响应信息
    // // res.end("ddd")

    // // 这部分内容在访问服务器的时候运行
    // // console.log("服务器已启动！");  
})
server.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





