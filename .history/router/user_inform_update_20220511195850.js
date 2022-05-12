// 用户信息修改后的更新数据库接口
const express = require("express")
const db = require("../db")
const router = express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'views/user_information2.html')
})
// 个人信息修改接口中的查询用户信息
router.post("/",function(req,res){
    // 这是一开始的手机号
    var originPhone = req.body.phone  
    // 这是修改后的手机号
    var phoneChange = req.body.phoneChange
    console.log("这是前端修改后的手机号："+phone);
    if(phone){
        db.updateUser( phone ,originPhone, function (err,data) { 
        if(err){
            res.json({code:-1,message:"手机号修改失败，请重试222。"})
        }else{
            console.log("这是因为成功了，"+data);
        }
    });
    }
    
})

module.exports = router;