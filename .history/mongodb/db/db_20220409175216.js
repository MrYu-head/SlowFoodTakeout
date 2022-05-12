// 连接MongoDB数据库
// 1.引入mongoose模块
const mongoose = require("mongoose")

// 2.配置连接
var options = {
    db_user : "YuQian",   //账户名
    db_pwd : "123456",
    db_host : "127.0.0.1",
    db_port : 27017,
    db_name : "ManshanFood",  //数据库名称
    useNewUrlParser : true
};

var dbUrl = "mongodb://" + options.db_user + ":" + options.db_pwd + "@" + options.db_host + ":" + options.db_port + "/" + options.db_name
mongoose.connect(dbUrl)


// 3.获取数据库连接句柄
let dbHandle = mongoose.connection

// 4.通过数据库句柄监听mongoose
dbHandle.on('open',function(err){
    if(err){
        console.log("数据库连接失败。");
        throw err   //抛出异常
    }
    console.log("数据库连接成功。");
})


// 5.定义表数据结构table.json
let table = {
    
}

