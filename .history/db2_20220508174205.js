// mongoose模块连接数据库
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/')
    .then(()=> console.log("数据库连接成功。"))
    .catch(()=> console.log("数据库连接失败。。。"))

// 创建集合规则，即表规则
let Schema = mongoose.Schema

// 用户表规则
let userSchema = new Schema({
    phone : {type:Number,require:true},
    password : {type:String,require:true},
    address : {type:String,require:true}
})

