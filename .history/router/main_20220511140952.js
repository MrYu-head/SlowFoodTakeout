// 主页路由
const express = require("express")
const router = express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})
router.post('/',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})

module.exports = router;