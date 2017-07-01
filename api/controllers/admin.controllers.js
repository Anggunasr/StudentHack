var express = require('express');
var crypto = require('crypto');
var jwt = require('../token');


//require models
var User = require('../models/user');
var Teacher = require('../models/teacher');
var Student = require('../models/student');


function AdminControllers(){
	this.login = function(data,res){
		var username = data.body.username;
		var password = data.body.password;
		User.findOne({username: username,password:password},function(err,user){
			if(err){
				console.log("error");
				res.status(500).send("get an error, try again");
			}
			if(!user){
				return res.status(404).json({message:"bukan user"});
			}
			if(user.status_user == false){
				return res.status(406).json({message:"not confirmed yet, contact the admin:)"});
			}
			var signInTime = Math.floor(Date.now()/1000);
			var expired =  signInTime + (2*60*60); 	
			var data_token  = {
				"username" : user.username,
				"login_type" : user.login_type,
				"exp" : expired
			}
			var token = jwt.createToken(data_token);
			res.json({
				status:200,
				succes:true,
				message:"enjoy tokennya",
				token:token,
				type :user.login_type
			})
		});
	}
	
	this.register = function(data,res){
		var username = data.body.username;
		var password = data.body.password;
		var login_type = 4;
		var status_user = true;
		User.create({username:username,password:password,status_user:status_user,login_type:login_type})
		.then(function(){
			res.status(200).json({message:"register berhasil, harap menunggu konfirmasi admin"});
		})
		.catch(function(err){
			res.status(406).json({message:"register failed"});
 			console.log(err);
		})
	}

	this.showsr = function(data,header,res){
		var auth = jwt.checkToken(header,res);
		if (auth == false){
			return res.status(406).json({message:"authentication failed, please login again.. as an admin of course :)"});
		}
		if (auth.login_type!=4){
			return res.status(406).json({message:"you're not an admin, right i?"});
		}else{
			User.find({status_user:false,login_type:3}).then(function(user){
			res.send(user);
		});
		}
	}

	this.confirm = function(data,header,res){
		var auth = jwt.checkToken(header,res);
		if (auth == false){
			return res.status(406).json({message:"authentication failed, please login again, as an admin of course"});
		}
		if (auth.login_type!=4){
			return res.status(406).json({message:"you're not an admin, right i?"});
		}else{
			User.update({username:data.body.username},{$set:{status_user:true}},function(){
				res.status(200).json({message:"Sukses ngegantinya :)"});
			})
		}
	}

	this.showallsr = function(data,header,res){
		var auth = jwt.checkToken(header,res);
		if (auth == false){
			return res.status(406).json({message:"authentication failed, please login again.. as an admin of course :)"});
		}
		if (auth.login_type!=4){
			return res.status(406).json({message:"you're not an admin, right i?"});
		}else{
			User.find({login_type:3}).then(function(user){
			res.send(user);
		});
		}
	}
}

module.exports = new AdminControllers();