// 连接MongoDB数据库
const mongoose = require("mongoose")

// 配置连接
var options = {
    db_user : "YuQian",   //账户名
    db_pwd : "123456",
    db_host : "127.0.0.1",
    db_port : 27017,
    db_name : "ManshanFood",  //数据库名称
    useNewUrlParser : true
};

var dbUrl = "mongodb://" + options.db_user + ":" + options.db_pwd + "@" + options.db_host + ":" + options.db_port + "/" + options.db_name
mongoose



