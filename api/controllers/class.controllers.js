var express = require('express');
var crypto = require('crypto');
var jwt = require('../token');
var Converter = require("csvtojson").Converter;

var Class = require('../models/class');

function ClassController(){
	this.create = function(data,res){
		var auth = jwt.checkToken(data.headers,res);
		if (auth==false){
			return res.status(406).json({message:"Authitentication Failed, please login"});
		}
		if (auth.login_type==3){
			var name = data.body.name;
			var walikelas = data.body.walikelas;
			var sr = auth.id;
			Class
				.create({name:name,walikelas:walikelas,sr:sr})
				.then(function(){
					res.status(200).json({message:"succes to create a class :)"})
				})
				.catch(function(err){
					res.status(400).json({message:"fail to create a class :("});
					console.log(err);
				})
		}else{
			res.status(400).json({message:"you're not an school regulator :/"});
		}
	
	}
}

module.exports = new ClassController();
