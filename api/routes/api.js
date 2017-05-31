var express = require('express');
var router = express.Router();
var User = require('../models/user');
var crypto = require('crypto');



router.get('/users',function(req,res,next){
	User.find({}).then(function(user){
		res.send(user);
	})
});



router.post('/register',function(req,res){
	User.create(req.body).then(function(user){
		res.status(200).send(user);
	});
});
router.put('/users/:id',function(req,res,next){
	res.send({type:'PUT'});
});
router.delete('/users/:id',function(req,res,next){
	res.send({type:'DELETE'});
});



module.exports = router;