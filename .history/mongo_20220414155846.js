// mongo.js用于连接mongodb数据库


const mongoose = require("mongoose")
const Schema = mongoose.Schema

// 1.连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/ManshanFood")

// 2.设计文档结构，也就是表结构
var userSchema = new Schema({
    phone : {type:Number.require:true},
    password : {type:String,require:true}
})


// 3.将文档结构发布为模型
module.exports = mongoose.model("mongo")



