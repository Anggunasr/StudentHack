var express = require('express');
var crypto = require('crypto');
var jwt = require('../token');


//require models
var User = require('../models/user');
var Teacher = require('../models/teacher');
var Student = require('../models/student');

//function User (student,teacher)
function UserControllers(){
	this.registerGuru = function (data,res){
		var username = data.body.username;
		var name = data.body.name;
		var password = data.body.password;
		var password_confirm = data.body.password_confirm;
		var gender = data.body.gender;
		var subject = data.body.subject;
		var handphone = data.body.handphone;
		var address = data.body.address;
		var email = data.body.email;
		var birthday = data.body.birthday;
		var status_user = true;
		var login_type = 1;
		if (password != password_confirm){
			res.status(406).json({message:"password tidak sama bos"});
		}else{
			User.create({username: username,password:crypto.createHash('sha256').update(password).digest("hex"),login_type:login_type,status_user:status_user}).then(function(){
				console.log("Regis User complete");
				Teacher.create({username:username,name:name,gender:gender,subject:subject,handphone:handphone,address:address,email:email,birthday:birthday}).then(function(){
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
	}

	this.registerSiswa = function(data,res){
		var username = data.body.username;
		var name = data.body.name;
		var password = data.body.password;
		var password_confirm = data.body.password_confirm;
		var gender = data.body.gender;
		var subject = data.body.subject;
		var handphone = data.body.handphone;
		var address = data.body.address;
		var email = data.body.email;
		var status_user = true;
		var login_type = 2;
		if (password != password_confirm){
			res.status(406).json({message:"password tidak sama bos"});
		}else{
			User.create({username: username,password:crypto.createHash('sha256').update(password).digest("hex"),status_user:status_user}).then(function(){
				console.log("Regis User complete");
				Student.create({username:username,name:name,gender:gender,subject:subject,handphone:handphone,address:address,email:email}).then(function(){
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
	}
	this.cekUser = function(data,res){
		var username = data.body.username;
		var password = data.body.password;
		User.findOne({username:username,password:crypto.createHash('sha256').update(password).digest("hex")},function(err,user){
			if (err){
				console.log("err");
				res.send("get an error");
			}
			if (!user){
				return res.json({status:404,message:"bukan user"});
			}else{
				return res.json(user);
			}
		})
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
			var data  = {
				"username" : user.username,
				"login_type" : user.login_type
			}
			var token = jwt.createToken(data);
			res.json({
				status:200,
				succes:true,
				message:"enjoy tokennya",
				token:token
			})
		});
	}
	this.getUser = function(data,res){
		var auth   = jwt.checkToken(data,res);
		if (auth == false){
			res.status(400).json({message:"token gagal terdeteksi"});
		}else{
			var username = auth.username;
			Teacher.findOne({username:username},function(err,teacher){
				if (err){
					res.send(err);
				}
				if(teacher){
					res.json(teacher);
				}else if (!teacher){
					Student.findOne({username:username},function(err,student){
						if(err){
							res.send(err);
						}
						res.json(student);
					});
				}
			});
		}
	}

}
	
module.exports = new UserControllers();