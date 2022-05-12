// 数据库文件

const mongoClient = require("mongodb").MongoClient
const url = 'mongodb://127.0.0.1:27017'

// 从数据库进行登录数据查询
function searchUser(whereStr,callback){
    mongoClient.connect(url,{useNewUrl})
}



