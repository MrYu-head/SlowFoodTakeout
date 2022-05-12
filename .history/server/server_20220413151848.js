// node.js搭建的服务器

// 1.引入服务器模块
const http = require("http")
// 创建http服务，回调函数中的返回值:req表示请求(客户端到服务端)，res表示响应(服务端到客户端)
const httpObj = http.createServer((req,res) => {
    // http请求默认会多请求一个图标文件，不需要需要删除掉
    if(req.url != "/favicon.ico"){
        // 在服务端打印访问服务的url
        console.log("用户访问地址：" + req.url);
        // 设置请求头，设置字符编码
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
        res.write("<>这是测试文字")
    }
})


