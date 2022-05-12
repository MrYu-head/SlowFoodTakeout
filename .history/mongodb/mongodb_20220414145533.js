	// 调用./MongoModule 模块 ，该模块为自定义模块，其中封装着与数据库的具体操作
	let db = require("./module");
	// Express
	let express = require("express");
	let app = express();
	// index.html 首页
	app.use("/index", express.static("../"));
	// 获取GET请求的search 
	let url = require("url");
	/* 获取POST请求的search  */
	let bobyParser = require("body-parser");
	app.use(bobyParser.urlencoded({extended: false}));
	
	/* 
	 *	以下调用insertOne、find等方法即是通过require("./MongoModule")模块封装的与数据库连接后的操作(下面会讲到)
	 *	
	 *	通过app.post("/insert", (req, res) => { ... })路由即是获取前台的form表单提交的基本信息
	 *		这里的req.body中存储的即是前台发送信息，以对象存储 
	 *		eg: { name: 'codingScript', age: '18岁', sex: '男' }
	 *	通过app.get("/find", (req, res) => { ... }路由即是获取前端的AJAX请求信息
	 *	...... 删除、修改同理
	 */
	// 1. 插入
	app.post("/insert", (req, res) => {
	    db.insertOne("home", "mine", req.body, (err, result) => res.send(result));
	});
	
	// 2. 查找 
	app.get("/find", (req, res) => {
	    let query = url.parse(req.url,true).query;
	    let pageAmount = parseInt(query.pageAmount) || 0;
	    let page = parseInt(query.pageAmount * (query.page-1)) || 0;
		db.find({
	        "dbName": "home",                       // 数据库名
	        "collectionName": "mine",               // 集合名
	        "pageAttr": {                       
	            "pageAmount":pageAmount,            // 每页数据量
	            "page":page                         // 第page页
	        },
	        "json": {},                             // 查询条件
	        "sort":{"num":1},                       // 排序     1:升序  -1:降序
	        "callback": function(err, result) {     // 查询结果
	            res.send(result);					// 查询的内容返回到前台
	        }
	    });
	});
	// 3. 删除
	app.get("/delete", (req, res) => {
	    let query = url.parse(req.url,true).query;
	    db.deleteMany("home", "mine", {"num":parseInt(query.num)}, (err, result) => res.send(result));
	});
	
	// 4. 修改
	app.get("/update", (req, res) => {
	    db.updateMany("home", "mine", {"age":"23"},{$set:{"sex":"男"}}, (err, result) => res.send(result));
	});
	
	// 运行服务器   监听127.0.0.1:300端口 (端口号可以任意改)
	app.listen(5500);
