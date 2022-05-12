// connect.js为连接MongoDB数据库


const mongoose = require("mongoose")
const MongoClient = require("mongodb").MongoClient
const url = "mongodb://127.0.0.1:27017/ManshanFood"
// const db = mongoose.connect(url)
MongoClient.connect(url,function)

