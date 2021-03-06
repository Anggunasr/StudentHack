var express = require('express');
var router = express.Router();
var Post = require('../models/post');
var post = require('../controllers/post.controllers');

router.get('/',function(req,res){
	res.json({status:false,message:"none API implenented"});
});

router.get('/getallpost',function(req,res){
	post.getall(req,res);
});

router.post('/create',function(req,res){
	post.create(req,res);
});

router.post('/addcomment',function(req,res){
	post.addcomment(req,res);
});

router.put('/pluslike',function(req,res){
	post.pluslike(req,res);
});
module.exports = router;