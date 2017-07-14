var express = require('express');
var router = express.Router();

var mysql = require('mysql');


var con = mysql.createConnection({
		// 一定要注意 小心有炸
		host:'localhost', //主机
		port:'3306', //断口号
		user:'hegang', //用户名
		password:'', //密码
		database:'baidunews' //数据库的名字
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getAllLists',function(req,res,next){
	// 读取数据  从数据库中来
	// 下面的设置参数是数据库那边的服务器

	// news 是表名
	var sql = "SELECT * FROM `news`";
	var sql1="SELECT * FROM `news` WHERE newstype='推荐'";
	var sql2="SELECT * FROM `news` WHERE newstype='百家'";
	var sql3="SELECT * FROM `news` WHERE newstype='本地'";
	var sql4="SELECT * FROM `news` WHERE newstype='娱乐'";
	var sql5="SELECT * FROM `news` WHERE newstype='社会'";
	var sql6="SELECT * FROM `news` WHERE newstype='军事'";
	var sql7="SELECT * FROM `news` WHERE newstype='女人'";
	var sql8="SELECT * FROM `news` WHERE newstype='搞笑'";
	var sql9="SELECT * FROM `news` WHERE newstype='互联网'";
	var sql10="SELECT * FROM `news` WHERE newstype='科技'";


    var classify=[];
	con.query(sql1,function(err,results,f){
		classify.push(results);
		//console.log(results);
		//res.send({state:'ok',datas:results})
		//res.render('index',{state:'ok',datas:results});
	})
	con.query(sql2,function(err,results,f){
		classify.push(results);
		//console.log(results);
		//res.send({state:'ok',datas:results})
		//render('index',{state:'ok',datas:results});
	})
	con.query(sql3,function(err,results,f){
		classify.push(results);
		//console.log(results);
		//res.send({state:'ok',datas:results})
		//render('index',{state:'ok',datas:results});
	})
	con.query(sql4,function(err,results,f){
		classify.push(results);
		//console.log(results);
		//res.send({state:'ok',datas:results})
		//render('index',{state:'ok',datas:results});
	})
	con.query(sql5,function(err,results,f){
		classify.push(results);
		//console.log(results);
		//res.send({state:'ok',datas:results})
		//render('index',{state:'ok',datas:results});
	})
	con.query(sql6,function(err,results,f){
		classify.push(results);
		//console.log(results);
		//res.send({state:'ok',datas:results})
		//render('index',{state:'ok',datas:results});
	})
	con.query(sql7,function(err,results,f){
		classify.push(results);
		//console.log(results);
		//res.send({state:'ok',datas:results})
		//render('index',{state:'ok',datas:results});
	})
	con.query(sql8,function(err,results,f){
		classify.push(results);
		//console.log(results);
		//res.send({state:'ok',datas:results})
		//render('index',{state:'ok',datas:results});
	})
	con.query(sql9,function(err,results,f){
		classify.push(results);
		//console.log(results);
		//res.send({state:'ok',datas:results})
		//render('index',{state:'ok',datas:results});
	})
	con.query(sql10,function(err,results,f){
		classify.push(results);
		//console.log(results);
		//res.send({state:'ok',datas:results})
		//render('index',{state:'ok',datas:results});
	})
	con.query(sql,function(err,results,f){

		console.log(classify);
		//res.send({state:'ok',datas:results})
		res.render('index',{state:'ok',datas:results,classifys:classify});
	})

})

// //推荐路由
// router.get('/tuijian',function(req,res){
// 	var newstype='推荐';
// 	con.query('SELECT * FROM `news` WHERE newstype=?',newstype,function(err,result,f){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index',{state:'ok',datas:results})
// 		}
// 	})
// })
// //百家路由
// router.get('/baijia',function(req,res){
// 	var newstype='百家';
// 	con.query('SELECT * FROM `news` WHERE newstype=?',newstype,function(err,result,f){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index',{state:'ok',datas:results})
// 		}
// 	})
// })
// //本地路由
// router.get('/bendi',function(req,res){
// 	var newstype='本地';
// 	con.query('SELECT * FROM `news` WHERE newstype=?',newstype,function(err,result,f){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index',{state:'ok',datas:results})
// 		}
// 	})
// })
// //娱乐路由
// router.get('/yule',function(req,res){
// 	var newstype='娱乐';
// 	con.query('SELECT * FROM `news` WHERE newstype=?',newstype,function(err,result,f){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index',{state:'ok',datas:results})
// 		}
// 	})
// })
// //社会路由
// router.get('/shehui',function(req,res){
// 	var newstype='社会';
// 	con.query('SELECT * FROM `news` WHERE newstype=?',newstype,function(err,result,f){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index',{state:'ok',datas:results})
// 		}
// 	})
// })
// //军事路由
// router.get('/junshi',function(req,res){
// 	var newstype='军事';
// 	con.query('SELECT * FROM `news` WHERE newstype=?',newstype,function(err,result,f){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index',{state:'ok',datas:results})
// 		}
// 	})
// })
// //女人路由
// router.get('/nren',function(req,res){
// 	var newstype='女人';
// 	con.query('SELECT * FROM `news` WHERE newstype=?',newstype,function(err,result,f){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index',{state:'ok',datas:results})
// 		}
// 	})
// })
// //搞笑路由
// router.get('/gaoxiao',function(req,res){
// 	var newstype='搞笑';
// 	con.query('SELECT * FROM `news` WHERE newstype=?',newstype,function(err,result,f){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index',{state:'ok',datas:results})
// 		}
// 	})
// })
// //互联网路由
// router.get('/hulian',function(req,res){
// 	var newstype='互联网';
// 	con.query('SELECT * FROM `news` WHERE newstype=?',newstype,function(err,result,f){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index',{state:'ok',datas:results})
// 		}
// 	})
// })
// //科技路由
// router.get('/keji',function(req,res){
// 	var newstype='科技';
// 	con.query('SELECT * FROM `news` WHERE newstype=?',newstype,function(err,result,f){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index',{state:'ok',datas:results})
// 		}
// 	})
// })


var con = mysql.createConnection({
		// 一定要注意 小心有炸
		host:'localhost', //主机
		port:'3306', //断口号
		user:'hegang', //用户名
		password:'', //密码
		database:'baidunews' //数据库的名字
});

router.get('/gethg',function(req,res,next){
	// 读取数据  从数据库中来
	// 下面的设置参数是数据库那边的服务器

	// news 是表名
	var sql = "SELECT * FROM `news`";

	con.query(sql,function(err,results,f){

		console.log(results);
		//res.send({state:'ok',datas:results})
		res.render('baidu',{state:'ok',datas:results});
	})

})



router.post('/inserUser',function(req,res,next){

	var newsImg=req.body.newsImg;
	var newsTitle=req.body.newsTitle;
	var newsTime=req.body.newsTime;
	var newstype=req.body.newstype;


	con.query("INSERT INTO news ( `newsImg`, `newsTitle`, `newsTime`,`newstype`) VALUES (?,?,?,?)",[newsImg,newsTitle,newsTime,newstype],function(err,results,f){

			res.send({state:'ok',message:'恭喜你插入成功'})

	})
	// con.end();

})

router.post('/deleteList',function(req,res,next){
	// console.log(req.body)
	var newsid=req.body.newsid;   // req.body.id;
	con.query("DELETE FROM `news` WHERE `newsid`=?",[newsid],function(err,results,f){
			console.log(newsid);
			res.send({state:'ok',message:'恭喜你删除成功'})


	})
	// con.end();
	
})

router.post('/changeUser',function(req,res,next){

	var newsImg=req.body.newsImg;
	var newsTitle=req.body.newsTitle;
	var newsTime=req.body.newsTime;
	var newsid=req.body.newsid;
	
	con.query("UPDATE `news` SET `newsImg`=?, `newsTitle`=?, `newsTime`=? WHERE `newsid`=?",[newsImg,newsTitle,newsTime,newsid],function(err,results,f){

			res.send({state:'ok',message:'恭喜你更改成功'})

	})
})

module.exports = router;




