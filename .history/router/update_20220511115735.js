const express = require("express")
const app = require("../app")
const db = require("../db")
const path = require("path")

// 3.个人信息修改接口中的查询用户信息
app.post("/user_inform_update",function(req,res){
    var phone = req.body.phoneChange
    // console.log("这是req.body:",req.body);
    console.log("这是前端获取到的手机号："+phone);
    db.searchUser({ phone: phone }, function (result) {
        if(result.length > 0){
            if(result[0].phone == phone){
                res.json({code : 1,message1 : result[0].password,message2 : result[0].address})
                
            }else{
                res.json({code:-1,message:"用户信息查询失败，请重试1。"})
            }
        }else{
            // 这一步查询数据后返回给前端，然后继续进行修改验证
            if(result[0].phone < 0){
                // 当修改后的手机号和数据库中查询的手机号不一样，就需要修改数据库中的手机号
                db.updateUser({phone : phoneChange},function(result){
                    if(result[0].phone == phoneChange){
                        res.json({code : 1,message : "用户手机号修改成功。。。。。"})
                    }else{
                        res.json({code : -1,message : "用户手机号修改失败，请重试。"})
                    }
                })
            }
        }
    });
    var phoneChange = req.body.phoneChange
    console.log("这是前端发送来的修改了的手机号："+phoneChange);
    // db.searchUser({ phone: phoneChange }, function (result) {
    //     if(result.length > 0){
    //         if(result[0].phone == phone){
    //             // res.json({code : 1,message1 : result[0].password,message2 : result[0].address})
    //             res.json({code : 1,message : "手机号修改成功，恭喜你。"})
                
    //         }else{
    //             res.json({code:-1,message:"很遗憾，手机号修改失败，请重试1。"})
    //         }
    //     }else{
    //         res.json({code:-1,message:"怎么又修改失败？？用户信息查询失败，请重试2。"})
    //     }
    // })
})