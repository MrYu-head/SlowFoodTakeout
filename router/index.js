// 
const express = require("express")
const expressRouter = express.Router()
const control = require("../controller/indexControl")

expressRouter.get("/login",control.login)
module.exports = expressRouter

// module.exports = {
//     pageRoute(req,res){
//         let fileType = req.url.split(".")
//         if(fileType[1] == "html"){
//             control.sendHTML(fileType[0],res)
//         }else if(fileType[1] == "css"){
//             control.sendCss(fileType[0],res)
//         }else if(fileType[1] == "js"){
//             control.sendJs(fileType[0],res)
//         }else if(fileType[1] == "jpg" || fileType[1] == "png"){
//             control.sendImg(fileType[0],res)
//         }
//     }
// }


