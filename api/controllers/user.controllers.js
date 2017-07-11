var express = require('express');
var crypto = require('crypto');
var jwt = require('../token');
var Converter = require("csvtojson").Converter;

//require models
var User = require('../models/user');
var Teacher = require('../models/teacher');
var Student = require('../models/student');

//extend variable
var converter = new Converter({});

//function User (student,teacher,admin)
function UserControllers(){
	this.register = function (data,res){
		var username = data.body.username;
		var password = data.body.password;
		var password_confirm = data.body.password_confirm;
		var schoolname = data.body.schoolname;
		if (password != password_confirm){
			res.status(406).json({message:"password tidak sama"});
		}else{
			console.log("ehm")
			User.create({username:username,password:crypto.createHash('sha256').update(password).digest("hex"),schoolname:schoolname})
			.then(function(){
				res.status(200).json({message:"register berhasil, harap menunggu konfirmasi admin"});
			})
			.catch(function(err){
				res.status(406).json({message:"register failed"});
				console.log(err);
			})
		}
		console.log(data.body);
	}

	this.registerGuru = function (req,res){
		var auth = jwt.checkToken(req.headers,res);
		if (auth==false){
			return res.status(406).json({message:"Authitentication Failed, please login"});
		}
		if (auth.login_type==3){
			console.log(req.body)
			var username = req.body.username;
			var name = req.body.name;
			var password = req.body.password;
			var password_confirm = req.body.password_confirm;
			var gender = req.body.gender;
			var subject = req.body.subject;
			var handphone = req.body.handphone;
			var address = req.body.address;
			var email = req.body.email;
			var birthday = req.body.birthday;
			var schoolname = auth.schoolname;
			var status_user = true;
			var homeroom = req.body.homeroom;
			var login_type = 1;
			var sr = auth.id;
			if (password != password_confirm){
				res.status(406).json({message:"password tidak sama"});
			}else{
				User.create({username: username,password:crypto.createHash('sha256').update(password).digest("hex"),login_type:login_type,status_user:status_user,schoolname:schoolname}).then(function(){
					console.log("Regis User complete");
					Teacher.create({username:username,name:name,gender:gender,subject:subject,handphone:handphone,address:address,email:email,birthday:birthday,homeroom:homeroom,sr:sr}	).then(function(){
						res.status(200).json({message:"register selesai"});
					}).catch(function(err){
						res.status(400).json({message:"register gagal mblo"});
						console.log(err);		
					});				
				}).catch(function(err){
						res.status(400).json({message:"register gagal"});
					console.log(err);
				})
			}
		}else{
			return res.status(406).json({message:"You're not School Regulator! :/"});
		}
	}

	this.registerSiswa = function(data,res){
		var auth = jwt.checkToken(data.headers,res);
		if (auth==false){
			return res.status(406).json({message:"Authitentication Failed, please login"});
		}
		if (auth.login_type==3){
			var username = data.body.username;
			var name = data.body.name;
			var password = data.body.password;
			var password_confirm = data.body.password_confirm;
			var gender = data.body.gender;
			var handphone = data.body.handphone;
			var address = data.body.address;
			var email = data.body.email;
			var status_user = true;
			var login_type = 2;
			var class_id = data.body.classid;
			var sr = auth.id;
			var schoolname = auth.schoolname;
			if (password != password_confirm){
				res.status(406).json({message:"password tidak sama bos"});
			}else{
				User.create({username: username,password:crypto.createHash('sha256').update(password).digest("hex"),status_user:status_user,schoolname:schoolname}).then(function(){
					console.log("Regis User complete");
					Student.create({username:username,name:name,gender:gender,handphone:handphone,address:address,email:email,sr:sr,class_id:class_id}).then(function(){
						res.status(200).json({message:"register selesai"});
					}).catch(function(err){
						res.status(400).json({message:"register gagal mblo"});
						console.log(err);		
					});				
				}).catch(function(err){
					res.status(400).json({message:"register gagal"});
					console.log(err);
				})
			}
		}else{
			return res.status(406).json({message:"You're not School Regulator! :/"});
		}
	}
	
	this.login = function(data,res){
		var username = data.body.username;
		var password = data.body.password;

		User.findOne({username: username,password:crypto.createHash('sha256').update(password).digest("hex")},function(err,user){
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
				"id" : user._id,
				"username" : user.username,
				"login_type" : user.login_type,
				"schoolname" : user.schoolname,
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

	this.editProfile = function(data,header,res){
		var auth = jwt.checkToken(header,res);
		if (auth==false){
			res.status(406).json({message:"Authitentication error, please login again"});
		}else{
			var username = auth.username;
			var name = data.body.name;
			var password = data.body.password;
			var password_confirm = data.body.password_confirm;
			var gender = data.body.gender;
			var subject = data.body.subject;
			var handphone = data.body.handphone;
			var address = data.body.address;
			var email = data.body.email;
			var status_user = true;
			var login_type = auth.login_type;
			User
				.update({
					name : name,
					password : password,
					gender : gender,
					subject : subject,
					handphone : handphone,
					address : address,
					email : email,
					status_user : status_user,
					login_type : login_type,
				},{
					where: {username : username}
				})
				.then(function(){
					res.status(200).json({message:"succes for editing profile"});
				})
				.catch(function(err){
					res.status(406).json({message:"get some error!try again"})
				})
		}
	}
}

module.exports = new UserControllers();