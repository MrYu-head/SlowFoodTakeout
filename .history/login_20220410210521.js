// 菜鸟教程方法连接MongoDB数据库，并且对数据库进行操作
// 1.创建连接
const MongoClient = require("mongodb").MongoClient
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

    //3.插入一条数据
    // ****插入数据成功
    var dbo = db.db("ManshanFood")
    var myObj = { phone:"123123123",password:"123123"}
    dbo.collection("user").insertOne(myObj,function(err,res){
        if(err) throw err
        console.log("文档插入成功。");
        db.close()
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









