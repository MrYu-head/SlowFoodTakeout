// 文件数据处理,响应/返回文件或数据

const fs = require("fs")

module.exports = {
    sendHTML(url,res){
        fs.readFile(`/src/${url}.html`,'utf-8',(err,data) => {
            console.log("写入文件："+data);
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data)
            return res.end()
        })
    },
    sendCss(url,res){
        fs.readFile(`/src/${url}.html`,'utf-8',(err,data) => {
            console.log("写入文件："+data);
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data)
            res.end()
        })
    },
    sendJs(url,res){
        fs.readFile(`/src/${url}.css`,'utf-8',(err,data) => {
            console.log("写入文件："+data);
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data)
            res.end()
        })
    },
    sendImg(url,res){
        fs.readFile(`/src/${url}`,'utf-8',(err,data) => {
            console.log("写入文件："+data);
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data)
            res.end()
        })
    }
}


