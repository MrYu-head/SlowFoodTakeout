// // router.js为路由Mokuai 
// // 处理路由、根据请求处理函数


// const fs = require("fs")
// const user = require("./user")

// // 1.创建一个路由容器
// const express = require("express")
// const router = require("./user")
// // 2.把路由挂载到router路由中
// router.get("./user",function(req,res){
//     if (req.query.phone != null && req.query.phone != undefined && req.query.phone != '') {
//         user.findOne({phone : req.query.phone.replace(/"/g, '')}, function (err, user) {
//             if (err) {
//                 return res.status(500).send('Server error');
//             }
//             if (user == undefined) {
//                 res.render('index.html', {
//                     count: 0,
//                     user: user
//                 })
//             } else {
//                 res.render('index.html', {
//                     count: 1,
//                     user: user
//                 })
//             }
//         })
//     }else {
//         user.find(function (err, users) {
//             if (err) {
//                 return res.status(500).send('Server error');
//             }
//             if (users.length >= 3) {
//                 var top = [
//                     users[0],
//                     users[1],
//                     users[2],
//                 ]
//             }
//             res.render('index.html', {
//                 top: top,
//                 users: users
//             })
//         })
//     }
// })













