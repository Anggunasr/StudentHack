var express = require('express');
var router = express.Router();
var Class = require('../models/class');
var kelas = require('../controllers/class.controllers');

router.get('/',function(req,res){
	res.json({status:false,message:"none API implenented"});
});

//create class
router.post('/create',function(req,res){
	kelas.create(req,res);
});


module.exports = router;