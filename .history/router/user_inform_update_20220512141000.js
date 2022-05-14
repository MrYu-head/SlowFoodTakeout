// 用户信息修改后的更新数据库接口
const express = require("express")
const db = require("../db")
const router = express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'views/user_information2.html')
})
// 个人信息修改接口中的查询用户信息
router.post("/phone",function(req,res){
    // 1.修改手机号
    // 这是一开始的手机号
    var originPhone = req.body.oldPhone
    console.log("这是原来的手机号哈:" + originPhone); 
    // 这是修改后的手机号
    var phoneChange = req.body.phoneChange
    console.log("这是前端修改后的手机号哈："+phoneChange);
    if(phoneChange !== undefined){
        console.log("这是前端修改后的手机号哈："+phoneChange);
        if(phoneChange){
            db.updateUserPhone( phoneChange ,originPhone, function (err,data) { 
                if(!err){
                    res.json({code:-1,message:"手机号修改失败，请重试222。"})
                }else{
                    console.log("这是因为成功了，");
                }
            });
        }
    }  
})

router.post("/password",function(req,res){
    // 2.修改密码
    // 这是一开始的手机号
    var originPhone = req.body.oldPhone
    console.log("这是原来的手机号呵:" + originPhone); 
    // 这是一开始的密码
    var originPassword = req.body.oldPassword
    console.log("这是原来的密码呵:" + originPassword); 
    // 这是修改后的密码
    var passwordChange = req.body.PasswordChange
    console.log("这是前端修改后的密码呵："+passwordChange);
    if(passwordChange !== undefined){
        console.log("这是前端修改后的密码呵："+passwordChange);
        if(passwordChange){
            db.updateUserPassword( passwordChange ,originPhone, function (err,data) { 
                if(!err){
                    res.json({code:-1,message:"密码修改失败，请重试。"})
                }else{
                    console.log("修改密码成功。");
                }
            });
        }
    }
})

router.post("/address",function(req,res){
    // 3.修改收货地址
    // 这是一开始的手机号
    var originPhone = req.body.oldPhone
    console.log("这是原来的手机号嘿:" + originPhone); 
    // 这是一开始的收货地址
    var originAddress = req.body.oldAddress
    console.log("这是原来的收货地址嘿:" + originAddress); 
    // 这是修改后的收货地址
    var addressChange = req.body.AddressChange
    console.log("这是前端修改后的收货地址嘿："+addressChange);
    if(addressChange !== undefined){
        // if(addressChange){
            db.updateUserAddress( addressChange ,originPhone, function (err,data) { 
                if(!err){
                    res.json({code:-1,message:"收货地址修改失败，请重试。"})
                }else{
                    res.json({code:-1,message:"收货地址修改失败，请重试。"})

                }
            });
        // }
    }
})
module.exports = router;