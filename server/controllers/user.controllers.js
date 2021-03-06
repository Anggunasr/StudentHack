var express = require('express');
var crypto = require('crypto');
var jwt = require('../token');
var Converter = require("csvtojson").Converter;

//require models
var User = require('../models/user');
var Teacher = require('../models/teacher');
var Student = require('../models/student');
var Parent = require('../models/parent');

//extend variable
var converter = new Converter({});

//function User (student,teacher,admin)
function UserControllers(){
	this.register = function (data,res){
		var username = data.body.email_school;
		var password = data.body.password_school;
		var password_confirm = data.body.password_school;
		var schoolname = data.body.name_school;
		if (password != password_confirm){
			res.status(406).json({message:"password tidak sama"});
		}else{
			User.create({username:username,password:crypto.createHash('sha256').update(password).digest("hex"),schoolname:schoolname})
			.then(function(){
				console.log("sukses");
				res.status(200).json({status:true,message:"register succes"});
			})
			.catch(function(err){
				res.status(406).json({message:"register failed"});
				console.log(err);
			})
		}
	}

	this.registerGuru = function (req,res){
		var auth = jwt.checkToken(req.headers,res);
		if (auth==false){
			return res.status(406).json({message:"Authitentication Failed, please login"});
		}
		if (auth.login_type==3){
			console.log(req.body)
			var username = req.body.email_teacher;
			var name = req.body.name_teacher;
			var password = req.body.password_teacher;
			var password_confirm = req.body.password_teacher;
			var gender = req.body.gender_teacher;
			var subject = req.body.subject;
			var handphone = req.body.handphone_teacher;
			var address = req.body.address_teacher;
			var email = req.body.email_teacher;
			var birthday = req.body.birthday_teacher;
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
			var username = data.body.email_student;
			var name = data.body.name_student;
			var password = data.body.password_student;
			var password_confirm = data.body.password_student;
			var gender = data.body.gender_student;
			var handphone = data.body.handphone_student;
			var address = data.body.address_student;
			var email = data.body.email_student;
			var status_user = true;
			var login_type = 2;
			var class_id = data.body.classid;
			var sr = auth.id;
			var schoolname = auth.schoolname;
			if (password != password_confirm){
				res.status(406).json({message:"password tidak sama bos"});
			}else{
				User.create({username: username,password:crypto.createHash('sha256').update(password).digest("hex"),login_type:login_type,status_user:status_user,schoolname:schoolname}).then(function(){
					console.log("Regis User complete");
					Student.create({username:username,name:name,gender:gender,handphone:handphone,address:address,email:email,sr:sr,class_id:class_id}).then(function(){
						res.json({status:true,message:"register selesai"});
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
			console.log("aye, login bisa mas :')",token);
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