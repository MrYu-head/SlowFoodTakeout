"use strict";

// app.js为服务器配置文件 并且全局使用路由
// 登录和注册逻辑分开实现
var port = 5500;
var hostName = '127.0.0.1';

var express = require("express");

var morgan = require("morgan");

var fs = require("fs");

var bodyParser = require("body-parser");

var db = require("./db");

var path = require("path");

var _require = require("http2"),
    connect = _require.connect;

var app = express(); // 后端程序中处理浏览器的跨域请求

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}); // 解析application/json

app.use(bodyParser.json()); // 解析url编码

app.use(bodyParser.urlencoded({
  extended: false
})); // 打印日志文件

app.use(morgan("dev"));
app.use("/", express["static"]('./'));
app.use("/views", express["static"]("./views")); // 主页面为登陆界面

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'login.html');
}); // 登陆页面

app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/' + 'login.html');
}); // 注册界面

app.get('/register', function (req, res) {
  res.sendFile(__dirname + '/' + 'register.html');
}); // 网站页面

app.get('/main', function (req, res) {
  res.sendFile(__dirname + '/' + 'main.html');
}); // 菜单界面

app.get('//menu', function (req, res) {
  res.sendFile(__dirname + '/' + 'views/menu.html');
}); // 订单界面

app.get('/order', function (req, res) {
  res.sendFile(__dirname + '/' + '/views/order.html');
}); // 为登录操作添加接口

app.post("/login", function (req, res) {
  var phone = req.body.phone;
  var password = req.body.password;

  if (!phone) {
    res.sendFile(__dirname + "/" + "login.html");
  } else {
    db.searchUser({
      phone: phone
    }, function (result) {
      if (result.length > 0) {
        if (result[0].phone == phone && result[0].password == password) {
          // 登陆成功进入主界面
          res.sendFile(__dirname + "/" + "main.html");
        } else {
          res.sendFile(__dirname + "/" + "login.html");
        }
      } else {
        res.sendFile(__dirname + "/" + "login.html");
      }
    });
  }
}); // 为注册添加接口

app.post('/register', function (req, res) {
  var phone = req.body.phone;
  var password = req.body.password;

  if (!phone) {
    // 手机号不能为空
    res.sendFile(__dirname + "/" + "register.html");
  } else if (!password) {
    // 密码不能为空
    res.sendFile(__dirname + "/" + "register.html");
  } else {
    db.searchUser({
      phone: phone
    }, function (result) {
      if (result.length > 0 && result[0].phone == phone) {
        // 注册成功，返回登陆
        res.sendFile(__dirname + "/" + "login.html");
      } else {
        res.sendFile(__dirname + "/" + "register.html");
        db.insertUser({
          phone: phone,
          password: password
        }, function (insertResult) {
          if (!insertResult) {
            res.json({
              code: 1,
              message: "登陆成功"
            }); // 注册成功，返回登陆

            res.sendFile(__dirname + "/" + "login.html");
          } else {
            res.sendFile(__dirname + "/" + "register.html");
          }
        });
      }
    });
  }
});
app.post('/main', function (req, res) {
  res.sendFile(__dirname + '/' + 'main.html');
}); // 从数据库获取shop表中的商家以及菜单信息展示在menu.html中

app.post('/menu', function (erq, res) {
  db.searchUser;
});
app.listen(port, hostName, function () {
  console.log("\u670D\u52A1\u5668\u5DF2\u542F\u52A8\uFF0C\u76D1\u542C\u7AEF\u53E3\uFF1A".concat(hostName, ":").concat(port));
});