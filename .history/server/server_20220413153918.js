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
const http = require('http')
const fs = require('fs')
const path = require('path')
// 导入url模块以实现登陆验证
const {URL} = require("url")

let server = http.createServer((req,res)=>{
    let myURL = new URL(path(__dirname,req,url))
    if(myURL.searchParams.get("phone")){
        let phone = myURL.searchParams.get("phone")
        let password = myURL.searchParams.get("password")
        res.writeHead("200",{
            "Content-Type" : "text/plain;charset=utf8"
        })
    }
	// console.log(req.urootstrap) false(bootstrap)
	fs.readFile(path.join(__dirname,'/source',req.url),'utf8',(err,data)=>{
		// 1 判断文件是否存在，不存在返回404
		// 2 最好使用req.url(这样.css文件发送请求，req.url也能获取到。才会链接.css)
		if(err){
			res.writeHead('404',{
				'Content-Type':'text/plain;charset=utf8'
			})
			res.end("页面不存在了")
		}else{
			res.end(data)			
		}
		})
	}).listen(3000,()=>{
	console.log("服务器已启动。")
})




