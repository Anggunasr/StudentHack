var express = require('express');
var router = express.Router();
var User = require('../models/user');
var crypto = require('crypto');
var jwt = require('../token');
var user = require('../controllers/user.controllers');

router.get('/',function(req,res){
	res.json({status:false,message:"none API implenented"});
});


//register teacher personal
router.post('/registerteacher',function(req,res){
	user.registerGuru(req,res);
});

//register student personal
router.post('/registerstudent',function(req,res){
	user.registerSiswa(req,res);
});

//login user
router.post('/login',function(req,res){
	user.login(req,res);
});

//get data user
router.post('/getuser',function(req,res){
	user.getUser(req,res);
});
//edit profil user

//cek user
router.post('/cekuser',function(req,res){
	user.cekUser(req,res);
})

//test token
router.post('/whoami',function(req,res){
	var auth = jwt.checkToken(req,res);
	res.send(auth);
});	



module.exports = router;