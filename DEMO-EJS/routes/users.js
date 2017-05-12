var express = require('express');
var router = express.Router();

//这里的render就是找模板生成，第一个参数是模板的名字，之后是模板中所需要用到的参数
router.get('/:name' , function(req,res){
	res.render('users' , {name : req.params.name});
} );

module.exports = router;