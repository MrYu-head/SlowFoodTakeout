// 用户信息修改时察州用户信息接口路由
const express = require("express")
const db = require("../db")
const router = express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'views/user_information2.html')
})
// 1.查询手机号
router.post("/",function(req,res){
    // let data = req.body
    console.log("这是req.body的值",req.body);
    var phone = req.body.phone
    console.log("这是前端发送来的手机号："+phone);
    db.searchUser({ phone: phone }, function (result) {
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
// 1.查询手机号
router.post("/",function(req,res){
    // let data = req.body
    console.log("这是req.body的值",req.body);
    var phone = req.body.phone
    console.log("这是前端发送来的手机号："+phone);
    db.searchUserPassword({ phone: phone }, function (result) {
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
// 1.查询手机号
router.post("/",function(req,res){
    // let data = req.body
    console.log("这是req.body的值",req.body);
    var address = req.body.address
    console.log("这是前端发送来的地址："+address);
    db.searchUserAddress({ address: address }, function (result) {
        if(result.length > 0){
            if(result[0].address == address){
                res.json({code : 1,message2 : result[0].address})
            }else{
                res.json({code:-1,message:"用户收货地址查询失败，请重试1。"})
            }
        }else{
            res.json({code:-1,message:"用户收货地址查询失败，请重试2。"})
        }
    });
})

module.exports = router;