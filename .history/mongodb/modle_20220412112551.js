// modle.js为数据模型

const mongoose = require("mongoose")
// 定义数据模型
const userSchema = new mongoose.Schema({
    phone : Number,
    password : String
})

// 将该Schema发布为Model,第一个参数为
mongoose.model('u1',userSchema)
