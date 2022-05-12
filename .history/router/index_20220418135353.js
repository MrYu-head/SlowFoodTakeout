// 

const control = require("../controller/indexControl")

module.exports = {
    pageRoute(req,res){
        let fileType = req.url.split(".")
        if(fileType[1] == "html"){
            control.sendHTML(fileType[0],res)
        }else if()
    }
}


