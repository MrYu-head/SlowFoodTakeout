var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
//存储在本地
var session = require('express-session');
var cookieParser = require('cookie-parser');
// var imghtml = require('./static/index')
var expImg = express();
//连接数据库操作
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ManshanFood";

//进去登录页面
router.get('/login', function (req, res) {
  //读取html文件
  fs.readFile('', function(err,data) {
    if (err) return console.log(err)
    res.setHeader('Content-Type', 'text/html');
    res.send(data)
    // console.log('async: ' + data.toString())
  })
})

//进去注册页面
router.get('/regin', function (req, res) {
  fs.readFile('/nodeCodeTest/node_express_app/myapp/static/regin.html', function(err,data) {
    if (err) return console.log(err)
    res.setHeader('Content-Type', 'text/html');
    res.send(data)
  })
})

//点击登录触发事件
router.get('/process_get', function (req, res) {
    var response = {
      "userName":req.query.userName,
      "passWord":req.query.passWord
  };
  // 放入cookie中
  res.cookie('userInfo',response);
  // res.end(JSON.stringify(response));
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    //数据库中的db是 fristNode 表格是userInfo，将登录信息放在这里
    var dbo = db.db("fristNode");
    dbo.collection("userInfo").find().toArray((err, result)=> { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
         let flag = false
        result.forEach( item => {
          if (item.name == req.query.userName) {
            flag = true
          }
          else {
            flag = false
            }
       })
       if(flag) {
          console.log(result, '登录成功');
          // 进入到登录成功的页面
          fs.readFile('/nodeCodeTest/node_express_app/myapp/static/test.html', function(err,data) {
            if (err) return console.log(err)
            // res.setHeader('Content-Type', 'text/html');
            res.end(data,JSON.stringify(response))
          })
        } else {
          res.render('loginerror');
        }
        db.close();
    });
  });
})

//点击注册触发事件
router.get('/regin_get', function (req, res) {
  var response = {
    "userName":req.query.userName,
    "passWord":req.query.passWord
  };
  // 放入cookie中
  res.cookie('userInfo',response);
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
      var dbo = db.db("fristNode");
      var myobj = {name: req.query.userName,password: req.query.passWord};
      dbo.collection("userInfo").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("注册成功");
          db.close();
      });
  });
  fs.readFile('/nodeCodeTest/node_express_app/myapp/static/login.html', function(err,data) {
    if (err) return console.log(err)
    res.setHeader('Content-Type', 'text/html');
    res.end(data,JSON.stringify(response))
  })
// 输出 JSON 格式
})

module.exports = router;
