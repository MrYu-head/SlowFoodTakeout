// 数据库文件

const mongoClient = require("mongodb").MongoClient
const url = 'mongodb://127.0.0.1:27017/'

// 从数据库进行登录数据查询
function searchUser(whereStr,callback){
    mongoClient.connect(url,{useNewUrlParser : true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user").find(whereStr).toArray(function(err,result){
            if(err) throw err
            console.log("数据库查询数成功！");
            console.log("查询指定条件的数据...",result);
            callback(result)
            db.close()
        })
    })
}

// 查询多条数据，商家、菜单
function searchShop(projection){
    mongoClient.connect(url,{useNewUrlParser:true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("shop").find().pretty(){
            if(err) throw err
            console.log("查询店铺信息成功。");
            console.log("查询店铺信息：",result);
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
        dbo.collection("user").insertOne(myobj,function(err,res){
            if(err) throw err
            console.log("用户信息插入成功。");
            callback(res)
            db.close()
        })
    })
}

exports.searchUser = searchUser;
exports.insertUser = insertUser;

