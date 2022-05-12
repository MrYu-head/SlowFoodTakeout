// modle.js为数据模型

const mongoose = require("mongoose")
// 定义数据模型
const userSchema = new mongoose.Schema({
    phone : Number,
    password : String
})

mongoose.model
