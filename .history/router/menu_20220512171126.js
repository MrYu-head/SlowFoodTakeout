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
    console.log("这是商家信息：");
})
