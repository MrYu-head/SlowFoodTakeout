// 文件数据处理,响应/返回文件或数据

const express = require("express")
const fs = require("fs")

module.exports = {
    // 判断登录
    login(req,res){
        let phone = req.query.phone;
        let password = req.query.password;
        if(phone == "123" && password == "123"){
            res.send("登陆成功。")
            console.log("手机号：",phone,"密码：",password);
        }else{
            res.send("登陆失败。")
            console.log("手机号：",phone,"密码：",password);
        }
    }
}


