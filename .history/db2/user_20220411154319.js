// 菜鸟教程方法连接MongoDB数据库，并且对数据库进行操作
// 地址：https://www.runoob.com/nodejs/nodejs-mongodb.html
// 1.创建连接
// 创建一个MongoClient对象，配置好指定的url和端口号(默认是27017)
// const mongoose = require("mongoose")
const MongoClient = require("mongodb").MongoClient
// 如果数据库不存在，MongoDB将创建数据库并建立连接
const url = "mongodb://localhost:27017/ManshanFood";

MongoClient.connect(url,function(err,db){
    if(err) throw err
    console.log("数据库已连接。");
    // 查询数据库中的用户信息，进行登陆验证
    // var dbo = db.db("ManshanFood")
    // dbo.collection("user").find({"phone":"15764234593"}).toArray(function(err,res){
    //     if(err) throw err
    //     console.log("用户信息查询成功。");
    //     db.close()
    // })
    db.close()

})

module.exports = user



