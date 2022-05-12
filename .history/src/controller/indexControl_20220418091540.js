// 文件数据处理

const fs = require("fs")

module.exports = {
    sendHTML(url,res){
        fs.readFile(`./src/${url}.html`,'utf-8',(err,data) => {
            console.log("写入文件："+data);
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data)
            return res.end()
        })
    }
}


