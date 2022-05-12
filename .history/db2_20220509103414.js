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

// 导出表规则
module.exports = user

