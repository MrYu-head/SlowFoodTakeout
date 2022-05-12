// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const http = require("http")
const fs = require("fs")  

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/plain')
    // console.log(req.url);
    // 模板字符串定义文件类型,将路径进行分割
    let fileType = req.url.split('.')
    if(fileType[1] == 'html'){
        fs.readFile(`/src/${fileType[0]}.html`,'utf-8',(err=,data) => {
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            // res.write(JSON.stringify(data))
            res.send(data)
            res.end()
        })
    }
    

    // // 结束响应信息
    // res.end("ddd")

    // // 这部分内容在访问服务器的时候运行
    // // console.log("服务器已启动！");  
})
server.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





