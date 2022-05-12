// node.js搭建的服务器

// 1.引入服务器模块
const http = require("http")
// 创建http服务，回调函数中的返回值:req表示请求(客户端到服务端)，res表示响应(服务端到客户端)
const httpObj = http.createServer((req,res) => {
    // http请求默认会多请求一个图标文件，不需要需要删除掉
    if(req.url != "/favicon")
})


