// // user.js为通过js文件操作mongodb数据库
// // app.js


// // 1.引入包
// const mongoose = require("mongoose")
// // const express = require(express)

// // 2.连接数据库
// mongoose
//     .connect("mongodb://localhost:27017/ManshanFood")
//     // connect返回的是一个promise。所以后面可以直接通过then  catch来监测
//     .then(() => {console.log("数据库连接成功。");})
//     .catch(() => {console.log("数据库连接失败。");})

// // 3.建表,先创建规则
// let Schema = mongoose.Schema

// // 数据库中建立一个用户的表
// let userSchema = new Schema({
//     phone : {type:Number,require:true},
//     password : {type:String,require:true}
// })

// // 规则创建好后就是建表
// mongoose.model("user",userSchema)

// // 通过建表之后返回的表对象进行增删改查
// // 增删改查和建表不是放在一个文件夹里面，只有用户和页面进行了交互，也就是说用户登录后，
// // 通过ajax发送了注册、登录信息，然后再往数据库中增加数据
// // user.create({
// //     phone : ""
// // })

// module.exports = user
