const express = require("express")
const router = express.Router()

router.get('/login',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})

router.post("/login",function(req,res){
    var phone = req.body.phone
    var password = req.body.password
    if(!phone && !password){
        res.json({code:0,message:"请确认输入正常。"})
    }else{
        db.searchUser({phone : phone},function(result){
            if(result.length > 0){
                if(result[0].phone == phone && result[0].password == password){
                    res.json({code:1,message:"登陆成功！"})
                }else{
                    res.json({code:-1,message:"手机号或密码错误，请重试。"})
                }
            }else{
                res.json({code:-1,message:"手机号或密码不正确，请重新输入。"})
            }
        });
    }
})

module.exports = loginRouter