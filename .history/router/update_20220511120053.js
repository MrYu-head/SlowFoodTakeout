const express = require("express")
const app = require("../app")
const db = require("../db")
const path = require("path")

// 修改手机号后更新数据库
app.post("/user_inform_update",function(req,res){
    var phone = req.body.phoneChange
    console.log("这是前端获取到的修改后的手机号："+phone);
    db.updateUser({phone : phone},function(result){
        
    })
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
  
})