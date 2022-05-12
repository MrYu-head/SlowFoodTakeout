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




// 菜鸟教程方法连接
// 1.创建连接
const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/ManshanFood";
MongoClient.connect(url,function(err,db){
    if(err) throw err
    console.log("数据库已连接。");
    db.close()
})

// 2.创建集合



