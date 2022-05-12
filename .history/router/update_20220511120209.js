const express = require("express")
const app = require("../app")
const db = require("../db")
const path = require("path")

// 修改手机号后更新数据库
app.post("/user_inform_update",function(req,res){
    var phone = req.body.phoneChange
    console.log("这是前端获取到的修改后的手机号："+phone);
    db.updateUser({phone : phone},function(result){
        if(result[0].phone > 0)
        if(result[0].phoif(result[0].phone = phone){
            res.json({code : 1,message : "手机号修改成功1."})
        }else{

        }
    })
})