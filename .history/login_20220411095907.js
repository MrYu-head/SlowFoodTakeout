// 菜鸟教程方法连接MongoDB数据库，并且对数据库进行操作
// 地址：https://www.runoob.com/nodejs/nodejs-mongodb.html
// 1.创建连接
// 创建一个MongoClient对象，配置好指定的url和端口号(默认是27017)
const MongoClient = require("mongodb").MongoClient
// 如果数据库不存在，MongoDB将创建数据库并建立连接
const url = "mongodb://localhost:27017/ManshanFood";

MongoClient.connect(url,function(err,db){
    if(err) throw err
    console.log("数据库已连接。");
    // db.close()

    // // 2.创建集合
    // var dbase = db.db("ManshanFood")
    // dbase.createCollection("user",function(err,res){
    //     if(err) throw err
    //     console.log("创建集合。");
    //     db.close()
    // })
   

    // //3.插入数据
    // // ****插入数据成功   插入一条为insertOne(),插入多条为insertMany()
    // var dbo = db.db("ManshanFood")
    // // var myObj = { phone:"123123123",password:"123123"}
    // var myObj = [
    //     { phone:"111111",password:"111111"},
    //     { phone:"222222",password:"222222"},
    //     { phone:"333333",password:"333333"}
    // ];
    // dbo.collection("user").insertMany(myObj,function(err,res){
    //     if(err) throw err
    //     console.log("文档插入成功,集合完成修改。");
    //     db.close()
    // })

    // // 4.更新数据  更新一条数据用updateOne(),更新多条数据用updateMany()
    // var dbo = db.db("ManshanFood")
    // // 查询的条件
    // var whereStr = {phone:"333333"}
    // var updateStr = {$set:{"password":"666666"}}
    // dbo.collection("user").updateOne(whereStr,updateStr,function(err,res){
    //     if(err) throw err
    //     console.log("文档更新成功。");
    //     db.close()
    // })


    // 5.删除数据  删除要先查找到这一条数据
    MongoClient.connect(url,function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        // 这是查询的条件
        dbo.whereStr = {"name":"zhangsan","sex":"man"}
        dbo.collection("loginin").deleteOne(whereStr,function(err,res){
            if(err)
        })
    })
})



// login.js为登陆界面(index.html)连接数据库文件
// const express = require("express")
// const app = express()
// const mongoose = require("mongoose")


// const express = require("express")
// const path = require("path")

// let app = express()
// app.listen(8899)

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname,"./mongodb/static")))

// app.post("/login",(req,res) => {
//     let data = req.body
//     console.log(data);
// })









