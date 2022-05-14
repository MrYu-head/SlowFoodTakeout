// 从数据库拿到商家信息以及菜单展示

const express = require("express")
const db = require("../db")
const router = express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'views/menu.html')
})
router.post('/',function(req,res){
    var shopName = req.body.shopName
    var minPrice = req.body.minPrice
    var address = req.body.address
    var distance = req.body.distance
    var timeout = req.body.timeout
    log("商家信息如下11111：" + "店名:"+shopName + "起送金额:"+minPrice + "地址:"+address + "距离："+distance + "配送时间："+timeout)
    if(!shopname || !minPrice || !address || !distance || !timeout){
        res.json({code:-1,message:"前端的商家信息是空的，请获取。"})
    }
})
