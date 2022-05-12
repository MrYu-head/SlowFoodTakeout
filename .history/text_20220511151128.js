1 npm install express -g npm install express-generator -g
2 e:
md NodeJSProject //在这里md是创建新的文件并命名
cd NodeJSProject //进去刚刚创建的文件夹
md expressdemo //根据跟人习惯，此步骤可以不操作直接穿件app文件夹，“app”文件名也是自定义哦
cd expressdemo
express app //此处app为项目名称，可自定义
3 $cd app && npm install //此处是提醒我们可以进入项目根目录，执行npm install 安装依赖模块
$npm start //此处是提醒我们可以进入项目根目录，如何启动服务器 这里我们使用 node app.js（运行入口文件，让数据展示在前端）
4 代码如下
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
console.log(’[SELECT ERROR]:’, err.message);
}
str = JSON.stringify(result);
//数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
//console.log(result); //数据库查询结果返回到result中
console.log(str);
});
app.get(’/’, function(req, res) {
res.send(str); //服务器响应请求 将数据渲染在页面 注：只有运行时是 node app,js运行这个入口文件才能展示数据
});
connection.end();
app.listen(3000, function() { 监听3000端口
console.log(‘Server running at 3000 port’);
});