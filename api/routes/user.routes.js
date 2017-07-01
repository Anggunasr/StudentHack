var express = require('express');
var router = express.Router();
var User = require('../models/user');
var user = require('../controllers/user.controllers');

router.get('/',function(req,res){
	res.json({status:false,message:"none API implenented"});
});


//register school regulator
router.post('/register',function(req,res){
	user.register(req,res);
});

//test scholl regulator
router.post('/cobasr',function(req,res){
	console.log(jwt.checkToken(req.headers));

})

//register teacher personal
router.post('/registerteacher',function(req,res){
	user.registerGuru(req,res);

});

//register student personal
router.post('/registerstudent',function(req,res){
	user.registerSiswa(req,res);
});

//try register via csv
router.post('/registercsv',function(req,res){
	user.registercsv(req,res);
});
//login user
router.post('/login',function(req,res){
	user.login(req,res);
});


//edit profil user

//cek user
router.post('/cekuser',function(req,res){
	user.cekUser(req,res);
})





module.exports = router;