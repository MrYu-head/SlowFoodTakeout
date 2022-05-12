// node.js搭建的服务器

// // 1.引入服务器模块
// const http = require("http")
// // 创建http服务，回调函数中的返回值:req表示请求(客户端到服务端)，res表示响应(服务端到客户端)
// const httpObj = http.createServer((req,res) => {
//     // http请求默认会多请求一个图标文件，不需要需要删除掉
//     if(req.url != "/favicon.ico"){
//         // 在服务端打印访问服务的url
//         console.log("用户访问地址：" + req.url);
//         // 设置请求头，设置字符编码
//         res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
//         res.write("<p>这是测试文字</p>")
//         // 结束响应
//         res.end()
//     }
// }).listen("1234","127.0.0.1",() => {
//     // 监听1234端口，开启
//     console.log("服务器已启动，端口号为1234");
// })

// 
const http = require("http");
// querystring模块，可解析数据，用来解析post发送来的信息
const querystring = require('querystring');

http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        // post请求在携带数据时，会多次触发req的data事件，每次只能接收到一组数据
        // 接收到的数据数量
        var i = 0;        
        // 用于存放所有数据
        var str = "";    
        req.on("data",(data)=>{
            // 记录数据个数
            i++;          
            console.log(`数据触发了${i}次`);
            str += data;  
        })
        // 数据接收结束后，会触发req的end事件
        req.on("end",()=>{
            // 使用querystring模块解析数据为对象
            str = querystring.parse(str) || {};

            res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
            res.write(`接收到的user为${str.user},接收到的pass为${str.pass}`);
            res.end();
        })
    }
}).listen("8001","127.0.0.2")


