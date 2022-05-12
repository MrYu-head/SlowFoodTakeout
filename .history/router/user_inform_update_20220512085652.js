// 用户信息修改后的更新数据库接口
const express = require("express")
const db = require("../db")
const router = express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'views/user_information2.html')
})
// 个人信息修改接口中的查询用户信息
router.post("/",function(req,res){
    if(req.body.phoneChange 1== undefined){

    }
    

    // 2.修改密码
    // 这是一开始的密码
    var originPassword = req.body.oldPassword
    console.log("这是原来的值:" + originPassword); 
    // 这是修改后的密码
    var PasswordChange = req.body.PasswordChange
    console.log("这是前端修改后的密码："+PasswordChange);
    if(PasswordChange){
        db.updateUserPassword( PasswordChange ,originPassword, function (err,data) { 
        if(!err){
            res.json({code:-1,message:"密码修改失败，请重试。"})
        }else{
            console.log("修改密码成功。");
        }
    });
    }

    // 3.修改收货地址
    // 这是一开始的收货地址
    var originAddress = req.body.oldAddress
    console.log("这是原来的值:" + originAddress); 
    // 这是修改后的收货地址
    var AddressChange = req.body.AddressChange
    console.log("这是前端修改后的收货地址："+AddressChange);
    if(AddressChange){
        db.updateUserAddress( AddressChange ,originAddress, function (err,data) { 
        if(!err){
            res.json({code:-1,message:"收货地址修改失败，请重试。"})
        }else{
            console.log("收货地址修改成功。");
        }
    });
    }
    
})

module.exports = router;