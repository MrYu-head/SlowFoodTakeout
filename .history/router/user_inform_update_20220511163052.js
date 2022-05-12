// 用户信息修改后的更新数据库接口
const express = require("express")
const db = require("../db")
const router = express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'views/user_information2.html')
})
// 个人信息修改接口中的查询用户信息
router.post("/user_inform_update",function(req,res){
    var phone = req.body.phoneChange
    console.log("这是前端修改后的手机号："+phone);
    db.updateUser({ phone: phone }, function (result) {
        if(result.length > 0){
            if(result[0].phone == phone){
                res.json({code : 1,message : "手机号修改成功111."})
            }else{
                res.json({code:-1,message:"手机号修改失败，请重试222。"})
            }
        }else{
            res.json({code:-1,message:"手机号修改失败，请重试333。"})
        }
    });
})

module.exports = router;