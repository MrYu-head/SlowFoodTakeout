// node.js+express搭建服务器

// 1.加载http模块
const http = require("http")

// 2.创建http服务器
const server = http.createServer(function(req,res){
	console.log("服务器已启动。");
	res.wri
})




















// const http = require('http')
// const fs = require('fs')
// const path = require('path')
// // 导入url模块以实现登陆验证
// const {URL} = require("url")

// let server = http.createServer((req,res)=>{
//     let myURL = new URL(path(__dirname,req,url))
//     if(myURL.searchParams.get("phone")){
//         let phone = myURL.searchParams.get("phone")
//         let password = myURL.searchParams.get("password")
//         res.writeHead("200",{
//             "Content-Type" : "text/plain;charset=utf8"
//         })
//         res.sendFile(__dirname + "../html.main.html")
//     }
// 	// console.log(req.urootstrap) false(bootstrap)
// 	fs.readFile(path.join(__dirname,'../html/main',req.url),'utf8',(err,data)=>{
// 		// 1 判断文件是否存在，不存在返回404
// 		// 2 最好使用req.url(这样.css文件发送请求，req.url也能获取到。才会链接.css)
// 		if(err){
// 			res.writeHead('404',{
// 				'Content-Type':'text/plain;charset=utf8'
// 			})
// 			res.end("页面不存在了")
// 		}else{
// 			res.end(data)			
// 		}
// 		})
// 	}).listen(5500,()=>{
// 	console.log("服务器已启动,监听端口:5500")
// })




