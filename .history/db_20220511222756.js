// 数据库文件
// 增 删 改 查

const mongoClient = require("mongodb").MongoClient
const url = 'mongodb://127.0.0.1:27017/'
mongoClient.connect(url,(err,db) => {
    if(err) throw err
    console.log("数据库连接成功！！！！！！");
    db.close()
})


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


// 3.1修改手机号，主要用于个人信息修改
function updateUserPhone(myObj1,myObj2,callback){
    console.log("这是修改后的数据:"+myObj1);
    console.log("这是原来的数据:"+myObj2);
    mongoClient.connect(url,{useNewUrlParser:true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user").updateOne({phone : myObj2},{$set:{phone:myObj1}},function(err,res){
            if(err) throw err
            console.log("用户信息修改成功！");
            callback(res)
            db.close()
        })
    })
}
// 3.2修改密码，主要用于个人信息修改
function updateUserPassword(myObj1,myObj2,callback){
    console.log("这是修改后的数据:"+myObj1);
    console.log("这是原来的数据:"+myObj2);
    mongoClient.connect(url,{useNewUrlParser:true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user").updateOne({password : myObj2},{$set:{password:myObj1}},function(err,res){
            if(err) throw err
            console.log("用户信息修改成功！");
            callback(res)
            db.close()
        })
    })
}
// 3.3修改收货地址，主要用于个人信息修改
function updateUserAddress(myObj1,myObj2,callback){
    console.log("这是修改后的数据:"+myObj1);
    console.log("这是原来的数据:"+myObj2);
    mongoClient.connect(url,{useNewUrlParser:true},function(err,db){
        if(err) throw err
        var dbo = db.db("ManshanFood")
        dbo.collection("user").updateOne({address : myObj2},{$set:{address:myObj1}},function(err,res){
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
exports.updateUserPhone = updateUserPhone;
exports.updateUserPassword = updateUserPhone;
exports.updateUserPhone = updateUserPhone;
// exports.delateOrder = delateOrder;
