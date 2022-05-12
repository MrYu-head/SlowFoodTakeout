// 菜鸟教程方法连接MongoDB数据库，并且对数据库进行操作
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

    //3.插入数据
    // ****插入数据成功
    var dbo = db.db("ManshanFood")
    // var myObj = { phone:"123123123",password:"123123"}
    var myObj = [
        { phone:"111111",password:"111111"},
        { phone:"222222",password:"222222"},
        { phone:"333333",password:"333333"},
        
    ];
    dbo.collection("user").insertOne(myObj,function(err,res){
        if(err) throw err
        console.log("文档插入成功,集合完成修改。");
        db.close()
    })

    // // 4.删除数据
    // var dbo = db.db("ManshanFood")
    // var
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









