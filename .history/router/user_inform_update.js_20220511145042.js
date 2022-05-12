// 用户信息修改后的更新数据库接口
const express = require("express")
const db = require("../db")
const router = express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'views/user_information2.html')
})
// 个人信息修改接口中的查询用户信息
router.post("/",function(req,res){
    var phone = req.body.phone
    console.log("这是前端修改后的手机号："+phone);
    db.({ phone: phone }, function (result) {
        if(result.length > 0){
            if(result[0].phone == phone){
                res.json({code : 1,message1 : result[0].password,message2 : result[0].address})
            }else{
                res.json({code:-1,message:"用户信息查询失败，请重试1。"})
            }
        }else{
            res.json({code:-1,message:"用户信息查询失败，请重试2。"})
        }
    });
})

module.exports = router;