// 主页路由
const express = require("express")
const db = require("../db")
const router = express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})
router.post('/',funciton(req,res){
    
})


module.exports = router;