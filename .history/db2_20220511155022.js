// mongoose模块连接数据库
const mongoose = require("mongoose")
// 创建集合规则，即表规则
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/')
    .then(()=> console.log("数据库连接成功。"))
    .catch(()=> console.log("数据库连接失败。。。"))


// 用户表规则：手机号、密码、地址
let userSchema = new Schema({
    phone : {type:Number,require:true},
    password : {type:String,require:true},
    address : {type:String,require:false}
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
module.exports = user;
module.exports = shop;
module.exports = order;
module.exports = menu;


// 1.从数据库进行登录数据查询  用户登录
function searchUser(whereStr,callback){
    mongoose.connect(url,{useNewUrlParser : true},function(err,db){
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

// 2.插入数据，主要用户用户注册
function insertUser(myobj,callback){
    mongoose.connect(url,{useNewUrlParser:true},function(err,db){
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


// 3.修改数据，主要用于个人信息修改
function updateUser(whereStr,callback){
    mongoose.connect(url,{useNewUrlParser:true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user").updateOne(whereStr).toArray(function(err,res){
        // dbo.collection("user").update(myObj,function(err,res){
            if(err) throw err
            console.log("用户信息修改成功！");
            callback(res)
            db.close()
        })
    })
}


// 查询数据，主要用于根据手机号从数据库中查询该用户的密码和收货地址信息并返回给前端



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
exports.updateUser = updateUser;
// exports.delateOrder = delateOrder;
