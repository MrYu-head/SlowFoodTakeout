// 数据库文件
// 增 删 改 查

const mongoClient = require("mongodb").MongoClient
const url = 'mongodb://127.0.0.1:27017/'


// 1.从数据库进行登录数据查询  用户登录
function searchUser(whereStr,callback){
    mongoClient.connect(url,{useNewUrlParser : true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user").find(whereStr).toArray(function(err,result){
            if(err) throw err
            console.log("数据库查询数据成功！");
            console.log("查询指定条件的数据，内容如下：",result);
            callback(result)
            db.close()
        })
    })
}

// 2.插入数据，主要用户用户注册
function insertUser(myobj,callback){
    mongoClient.connect(url,{useNewUrlParser:true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user").insertOne(myobj,function(err,res){
            if(err) throw err
            console.log("用户信息插入成功。");
            callback(res);
            db.close()
        })
    })
}


// 3.修改数据，主要用于个人信息修改
function updateUser(myObj,callback){
    mongoClient.connect(url,{useNewUrlParser:true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user").update(whereStr).toArray(function(err,res){
        // dbo.collection("user").update(myObj,function(err,res){
            if(err) throw err
            console.log("用户信息修改成功！");
            callback(res)
            db.close()
        })
    })
}


// 查询数据，主要用于根据手机号从数据库中查询该用户的密码和收货地址信息并返回给前端



// // 删除数据  主要是对订单进行删除
// // 要删除数据，首先要查找数据是否存在，存在才能删除，不存在，删除无效。
// function dalateData(whereStr,callback){
//     mongoClient.connect(url,{useNewUrlParser:true},function(err,db){
//         if(err) throw err
//         var dbo = db.db("ManshanFood")
//         dbo.collection("shop").delateOne(whereStr,function(err,obj){
//             if(err) throw err
//             console.log("删除数据成功。");
//             callback(res)
//             db.close()
//         })
//     })
// }


exports.searchUser = searchUser;
exports.insertUser = insertUser;
exports.updateUser = updateUser;
// exports.delateOrder = delateOrder;
