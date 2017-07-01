var express = require('express');
var router = express.Router();
var Teacher = require('../models/teacher');
var teacher = require('../controllers/teacher.controllers');

router.get('/',function(req,res){
	res.json({status:false,message:"none API implenented"});
});

router.get('/getall',function(req,res){
	teacher.getall(req,res)
});


module.exports = router;