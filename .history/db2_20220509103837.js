// mongoose模块连接数据库
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/')
    .then(()=> console.log("数据库连接成功。"))
    .catch(()=> console.log("数据库连接失败。。。"))

// 创建集合规则，即表规则
let Schema = mongoose.Schema

// 用户表规则：手机号、密码、地址
let userSchema = new Schema({
    phone : {type:Number,require:true},
    password : {type:String,require:true},
    address : {type:String,require:true}
})

// 商家表规则：商家名、起送金额、地址、距离
let shopSchema = new Schema({
    shopName : {type:String,require:true},
    minPrice : {type:Number,require:true},
    address : {type:String,require:true},
    distance : {type:Number,require:true},
})

// 订单表规则：商家名、收货地址、菜单及数量、订单总金额
let orderSchema = new Schema({
    orderId : {type:Number,require:true},
    shopName : {type:String,require:true},
    address : {type:String,require:true},
    order : {type:String,require:true},
    orderPrice : {type:Number,require:true}
})

// 菜单表规则：所有的菜单、菜名、图片、单价
let menuSchema = new Schema({
    name : {type:String,require:true},
    img : {type:Image,require:true},
    menuPrice : {type:Number,require:true}
})

// 创建好规则建表
let user = mongoose.model("user",userSchema)
let shop = mongoose.model("shop",shopSchema)
let order = mongoose.model("order",orderSchema)
let menu = mongoose.model("menu",menuSchema)
// 导出表规则
module.exports = user
module.exports = shop
module.exports = order
module.exports = menu

// 从数据库进行登录数据查询  用户登录
function searchUser(whereStr,callback){
    mongoClient.connect(url,{useNewUrlParser : true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user").find(whereStr).toArray(function(err,result){
            if(err) throw err
            console.log("数据库查询数据成功！");
            console.log("查询指定条件的数据，内容如下：",result);
            callback(result)
            db.close()
        })
    })
}

// 插入数据  用户注册
function insertUser(myobj,callback){
    mongoClient.connect(url,{useNewUrlParser:true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user").insertOne(myobj,function(err,res){
            if(err) throw err
            console.log("用户信息插入成功。");
            callback(res);
            db.close()
        })
    })
}


// // 修改数据，个人信息修改
// function modifyData()




// // 删除数据  主要是对订单进行删除
// // 要删除数据，首先要查找数据是否存在，存在才能删除，不存在，删除无效。
// function dalateData(whereStr,callback){
//     mongoClient.connect(url,{useNewUrlParser:true},function(err,db){
//         if(err) throw err
//         var dbo = db.db("ManshanFood")
//         dbo.collection("shop").delateOne(whereStr,function(err,obj){
//             if(err) throw err
//             console.log("删除数据成功。");
//             callback(res)
//             db.close()
//         })
//     })
// }


exports.searchUser = searchUser;
exports.insertUser = insertUser;