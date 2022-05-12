

const fs = require("fs")

module.exports = {
    sendHTML(url,res){
        fs.readFile(`/src/${fileType[0]}.html`,'utf-8',(err,data) => {
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            // res.write(JSON.stringify(data))
            res.send(data)
            res.end()
        })
    }
}


