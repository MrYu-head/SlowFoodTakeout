// 数据库文件
// 增 删 改 查

// const mongoClient = require("mongodb").MongoClient
// const url = 'mongodb://127.0.0.1:27017/'
// mongoClient.connect(url,(err,db) => {
//     if(err) throw err
//     console.log("数据库连接成功！！！！！！");
//     db.close()
// })
const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.connect('mongodb://127.0.0.1:27017/')
        .then(() => {console.log("数据库连接成功。");})
        .catch(() => {console.log("数据库连接失败。");})

// 用户表规则
var userSchema = new Schema({
    phone : {type : Number,require : true},
    password : {type : String,require : true},
    address : {type : Text}
})
// 商家表规则

var shopSchema = new Schema({
    shopName : {type : Text,require:true},
    shopAddress : {type:Text,require:true},
    distance : {type:String,require:true},
    minPrice : {type:Number,require:true},

})

// 菜单表规则
var menuSchema = new Schema({
    menuId : {type:Number,require:true},
    menuName : {type:Text,require:true},
    menuPrice : {type:Number,require:true},
    // menuImg : {type:Image}
})

// 订单表规则
var orderSchema = new Schema({
    orderId : {type:Number,require:true},
    shopName : {type : Text,require:true},
    menuName : {type:Text,require:true},
    menuPrice : {type:Number,require:true},
    address : {type : Text}
})


var user = mongoose.model("user",userSchema)
var user = mongoose.model("user",userSchema)
var user = mongoose.model("user",userSchema)
var user = mongoose.model("user",userSchema)
