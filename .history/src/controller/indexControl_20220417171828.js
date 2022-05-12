

const fs = require("fs")

module.exports = {
    sendHTML(url,res){
        fs.readFile(`/src/${url}.html`,'utf-8',(err,data) => {
            console.log(data);
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.write((data))
            return res.end()
        })
    }
}


