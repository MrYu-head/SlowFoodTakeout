// router.js为路由Mokuai 
// 处理路由、根据请求处理函数


const fs = require("fs")
const user = require("./user")

// 1.创建一个路由容器
const express = require("express")
const router = require("./user")
// 2.把路由挂载到router路由中
router.get("./user",function(req,res){
    if()
})














// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const user = require('../mongodb/user').user;
// mongoose.connect("mongodb://127.0.0.1:27017/ManshanFood");
 
// // 获取主页
// router.get('/', function(req, res) {
//       res.render('index', { title: 'index' });
// });
 
// /*login*/
// router.get('/login', function(req, res) {
//     res.render('login', { title: 'login' });
// });
 
// /*logout*/
// router.get('/logout', function(req, res) {
//       res.render('logout', { title: 'logout' });
// });
 
// /*hompage*/
// router.post('/homepage', function(req, res) {
//     var query_doc = {userid: req.body.userid, password: req.body.password};
//     (function(){
//         user.count(query_doc, function(err, doc){
//             if(doc == 1){
//                 console.log(query_doc.userid + ": login success in " + new Date());
//                 res.render('homepage', { title: 'homepage' });
//             }else{
//                 console.log(query_doc.userid + ": login failed in " + new Date());
//                 res.redirect('/');
//             }
//         });
//     })(query_doc);
// });
 
// module.exports = router;