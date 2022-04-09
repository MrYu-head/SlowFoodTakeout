const mongoose = require("mongoose")

// 1.连接数据库服务，创建数据库manshan
mongoose
    .connect("mongodb://localhost:27017/manshan")
    .then(()=>{console.log("数据库连接成功。");})
    .catch(()=>{console.log("数据库连接失败。");})

// 2.建表,通过new去建表
let Schema = mongoose.Schema
let userSchema = new Schema({
    // 用户表只有手机号和密码，没有用户名
    phoneNumber : {type:Number,require:true},
    password : {type:String,require:true},
})


// 3.规则创建好后就建表
let user = mongoose.model("user",userSchema)
// 通过建表之后返回的表对象进行各种数据的增删改查操作
user.create({
    phoneNumber : phoneNumber
})

module.exports = user

