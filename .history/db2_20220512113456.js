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


var userSchema = new Schema({
    phone : {type : Number,r}
})
