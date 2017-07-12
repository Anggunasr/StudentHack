var express = require('express');
var router = express.Router();
var User = require('../models/user');
var crypto = require('crypto');
var jwt = require('../token');
var admin = require('../controllers/admin.controllers');

//testing get
router.get('/',function(req,res){
	res.json({status:false,message:"none API implenented"});
});

//register admin
router.post('/register',function(req,res){
	admin.register(req,res);
})

//login admin
router.post('/login',function(req,res){
	admin.login(req,res);
})

//show all school regulator
router.post('/showall',function(req,res){
	admin.showallsr(req,res);
})

//show school regulator not confirmed
router.post('/showsr',function(req,res){
	admin.showsr(req,res);
})

//confirm schrool regulator
router.post('/confirm',function(req,res){
	admin.confirm(req,res);
})

module.exports = router;