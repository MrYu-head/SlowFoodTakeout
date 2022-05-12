// 注册路由
const express = require("express")
const db = require("../db")
const router = express.Router()
const user = require("../user")

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'register.html')
})

router.post('/', function (req, res) {
    var phone = req.body.phone
    var password = req.body.password
    if (!phone && !password) {
        res.json({code:0,message:"请确认输入正常。"})
    }else {
        db.searchUser({ phone: phone }, function (result) {
            if(result.length > 0 && result[0].phone == phone) {
                // 注册成功，返回登陆
                res.json({code:1,message:"注册成功，可以登录。"})
            }else{
                res.json({code:-1,message:"注册失败，请重试。"})
                user.create({ phone: phone, password: password }, function (err,insertResult) {
                    // if (!insertResult) {
                    //     res.json({code:1,message:"注册成功，可以登录。"})
                    // } else {
                    //     res.json({code:-1,message:"注册失败，请重试。"})
                    // }
                    if(err){
                        res.json({code:-1,message:"注册失败，请重试。"})
                    }else{
                        res.send({code:1,message:"注册成功，可以登录。"})
                    }
                })
            }
        });
    }
})

// router.post('/', function (req, res) {
//     var phone = req.body.phone
//     var password = req.body.password
//     if (!phone && !password) {
//         res.json({code:0,message:"请确认输入正常。"})
//     }else {
//         db.searchUser({ phone: phone }, function (result) {
//             if(result.length > 0 && result[0].phone == phone) {
//                 // 注册成功，返回登陆
//                 res.json({code:1,message:"注册成功，可以登录。"})
//             }else{
//                 res.json({code:-1,message:"注册失败，请重试。"})
//                 db.insertUser({ phone: phone, password: password }, function (insertResult) {
//                     if (!insertResult) {
//                         res.json({code:1,message:"注册成功，可以登录。"})
//                     } else {
//                         res.json({code:-1,message:"注册失败，请重试。"})
//                     }
//                 })
//             }
//         });
//     }
// })

module.exports = router;