// 从数据库拿到商家信息以及菜单展示

const express = require("express")
const db = require("../db")
const router = express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'views/menu.html')
})
router.post('/',function(req,res){
    var query = {}
    if(req.query.nameSign){
        console.log("1111111111111" + nameSign);
        query.name = new RegExp(req.query.nameSign)
        console.log(query.name);
    }
    shopDao.findByName(query.name,function(err,list){
        
    })

    // console.log("这是querty的内容：" + query);
    // var nameSign = req.body.nameSign
    // console.log("这是发送来的请求查询的关键字");
    // var shopName = req.body.shopName
    // var minPrice = req.body.minPrice
    // var address = req.body.address
    // var distance = req.body.distance
    // var timeout = req.body.timeout
    // console.log("商家信息如下11111：" + "店名:"+shopName + "起送金额:"+minPrice + "地址:"+address + "距离："+distance + "配送时间："+timeout)
    // if(!shopName || !minPrice || !address || !distance || !timeout){
    //     res.json({code:555,message:"前端的商家信息是空的，请获取。"})
    // }else{
    //     db.searchShop({shopName : shopName},function(result){
    //         if(result[0].length > 0){
    //             // 查询商家信息成功
    //             res.json({code : 666,message1:result[0].shopName,message2:result[0].minPrice,message3:result[0].address,message4:result[0].distance})
    //         }else{
    //             res.json({code:404,message:"商家信息查询失败，请重新查询！"})
    //         }
    //     })
    // }
})

module.exports = router;
