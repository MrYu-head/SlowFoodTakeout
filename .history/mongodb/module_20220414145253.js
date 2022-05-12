// 任何数据库的操作，都是先连接数据库！所以可以将连接数据库封装成函数

// 引入mongodb模块
let MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017/ManshanFood"
MongoClient.

// 1. 插入数据
exports.insertOne = function(dbName, collectionName, json, callback) {
    _connectDB(dbName, (err, db) => {
        db.collection(collectionName).insertOne(json, (err, result) => {
            if(err)     return "插入失败";
            callback(err, result);
            db.close();
        });
    });
}

// 2. 删除数据
exports.deleteMany = function(dbName, collectionName, json, callback) {
    _connectDB(dbName, (err, db) => {
        db.collection(collectionName).deleteMany(json, (err, result) => {
            if(err)     return "插入失败";
            callback(err, result);
            db.close();
        });
    });
}

// 3. 修改数据
exports.updateMany = function(dbName, collectionName, jsonOld,jsonNew, callback) {
    _connectDB(dbName, (err, db) => {
        db.collection(collectionName).updateMany(jsonOld, jsonNew, (err, result) => {
            if(err)     return "插入失败";
            callback(err, result);
            db.close();
        });
    });
}

// 4. 查找数据  
exports.find = function(option) {
    _connectDB(option.dbName, (err, db) => {
        db.collection(option.collectionName).find(option.json)
        .limit(option.pageAttr.pageAmount)      // 每页数据量
        .skip(option.pageAttr.page)             // 第page页
        .sort(option.sort)                      // 排序
        .toArray((err, result) => {
            if(err)     return "查询失败";
            option.callback(err, result);
            db.close();
        });
    }); 
}
