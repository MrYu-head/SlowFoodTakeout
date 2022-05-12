// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const http = require("http")
const fs = require("fs")  
// 引入indexControl文件中的方法
const control = require("./controller/indexControl.js")

const server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/plain')
    // 模板字符串定义文件类型,将路径进行分割
    let fileType = req.url.split('.')
    if(fileType[1] == 'html'){
        control.sendHTML(fileType[0],res)
        // fs.readFile(`/src/${fileType[0]}.html`,'utf-8',(err,data) => {
        //     res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        //     // res.write(JSON.stringify(data))
        //     res.write(data)
        //     res.end()
        // })
    }
})
server.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





