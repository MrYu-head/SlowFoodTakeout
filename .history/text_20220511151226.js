var express = require(‘express’); //引入express模块
var mysql = require(‘mysql’); //引入mysql模块
var app = express(); //创建express的实例

var connection = mysql.createConnection({ //创建mysql实例
    host: ‘192.168.1’, //主机地址 （默认：localhost）
    port: ‘3306’, //端口号 （默认：3306）
    user: ‘root’,
    password: ‘123456’,
    database: ‘bsp_os’ 数据库名
});
connection.connect();
    var sql = ‘SELECT * FROM t_ad’; 查询数据
    var str = " ";
connection.query(sql, function(err, result) {
    if (err) {
    console.log(’[SELECT ERROR]:, err.message);
}
str = JSON.stringify(result);
//数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
//console.log(result); //数据库查询结果返回到result中
console.log(str);
});
app.get('/', function(req, res) {
    res.send(str); //服务器响应请求 将数据渲染在页面 注：只有运行时是 node app,js运行这个入口文件才能展示数据
});
connection.end();
app.listen(3000, function() { 监听3000端口
console.log('Server running at 3000 port');
});