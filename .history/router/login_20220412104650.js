// login.js为登陆验证，登陆界面发送消息后，数据库进行身份验证
const user = require("../db2/user.js")
module.exports = (req,res) => {
    let data = req.body
    console.log("实现成功。");

    // 验证登录
    user.find({
        phone : data.phone,
        password : data.password
    })
    .then(() => {
        console.log("成功。");
        res.send("登陆成功。")
    })
    .catch((err) => {
        console.log("失败",err);
        res.send("登陆失败。")
    })
    
}



