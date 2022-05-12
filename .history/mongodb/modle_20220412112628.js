// modle.js为数据模型

const mongoose = require("mongoose")
// 定义数据模型
const userSchema = new mongoose.Schema({
    phone : Number,
    password : String
})

// 将该Schema发布为Model,第一个参数为数据库的集合，即表，没有会自动创建
mongoose.model('user2',userSchema)
