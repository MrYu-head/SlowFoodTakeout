// app.js为服务器基本配置

const port = 5500
const hostName = '127.0.0.1'
const express = require("express")
const morgan = require("morgan")
const app = express()

app.use(morgan("dev"))
app.use(express.static(__dirname + '/'))
console.log("上部分成功");

app.get('/login',(req,res) => {
    // let phone = req.query.phone
    // let password = req.query.password
    // console.log("手机号：",phone,"密码：",password);
    // if(phone == "123" && password == "111"){
    //     res.send("登陆成功")
    // }else{
    //     res.send("登陆失败")
    // }
    console.log(req.url);
    console.log(q);
})

app.listen(port,hostName,function(){
    console.log(`服务器已启动，监听端口：${hostName}:${port}`);
})





