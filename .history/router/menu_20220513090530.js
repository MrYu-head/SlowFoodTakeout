// 从数据库拿到商家信息以及菜单展示

const express = require("express")
const db = require("../db")
const router = express.Router()
const shopDao = require("../mongodb/shop")

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'views/menu.html')
})
router.post('/',function(req,res){
    // 1.前端发来的查询关键字
    var name = req.body.name
    console.log("这是发送来的请求查询的关键字");
    var shopName = req.body.shopName
    var minPrice = req.body.minPrice
    var address = req.body.address
    var distance = req.body.distance
    var timeout = req.body.timeout
    
    var page = req.query.page || 1
    // 指定每一页要查询的数量
    var limitNums = 30
    page = parseInt(page)
    // 跳过指定数量
    var skipNums = (page - 1) * limitNums
    // 2.多字段匹配
    var _filter = {
        $or:[
            {name : {$regex : reg}},
            {priceDiscrip : {$regex : reg}},
            // {name : {$regex : reg}},
        ]
    }
    db.find(_filter)
    // 指定从MongoDB中读取的记录条数
    skip(skipNums)
    limit(limitNums)
    sort({createTime})
    console.log("商家信息如下11111：" + "店名:"+shopName + "起送金额:"+minPrice + "地址:"+address + "距离："+distance + "配送时间："+timeout)
    if(!shopName || !minPrice || !address || !distance || !timeout){
        res.json({code:555,message:"前端的商家信息是空的，请获取。"})
    }else{
        db.searchShop({shopName : shopName},function(result){
            if(result[0].length > 0){
                // 查询商家信息成功
                res.json({code : 666,message1:result[0].shopName,message2:result[0].minPrice,message3:result[0].address,message4:result[0].distance})
            }else{
                res.json({code:404,message:"商家信息查询失败，请重新查询！"})
            }
        })
    }
})

module.exports = router;
