// 数据库文件

const mongoClient = require("mongodb").MongoClient
const url = 'mongodb://127.0.0.1:27017'

// 从数据库进行登录数据查询
function searchUser(whereStr,callback){
    mongoClient.connect(url,{useNewUrlParser : true},function(err,db){
        if(err) throw
        var dbo = db.db("ManshanFood")
        dbo.collection("user").find(whereStr).toArray(function(err,result){
            if(err) throw err
            console.log("查询指定条件的数据...",result);
            callback(result)
            db.close()
        })
    })
}
// 插入数据
function insertUser(myobj,callback){
    mongoClient.connect(url,{useNewUrlParser:true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user")
    })
}


