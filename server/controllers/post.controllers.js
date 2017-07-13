var express = require('express');
var jwt = require('../token');

//require models
var Post = require('../models/post');
var User = require('../models/user');
var Student = require('../models/student');
var Teacher = require('../models/teacher');


//function for post
function PostController(){
	this.getall = function(req,res){
		Post.find()
		.sort({$natural:-1})
		.then(function(result){	
			var number  = Object.keys(result).length;
			for (var i=0;i<number;i++){
				console.log(i);
				var temp = result[i];
				User.findById(temp.id,function(err,hasil){
					if (err){
						console.log(err);
					}else{
						console.log(hasil);
					}
				})
			}
			res.status(200).json({result});
		})
		.catch(function(err){
			res.status(406).json({message:"get some error, try again!"});
		})
	}

	this.pluslike = function(req,res){
		Post.findOne({_id:req.body._id},function(err,result){
			var like = result.like + 1;
			Post.update({_id:req.body._id},{
				content:result.content,
				idpembuat:result.idpembuat,
				title:result.title,
				comment:result.comment,
				like:like
			})
			.then(function(){
				res.status(200).json({message:"succes to increase like :)"});
			})
			.then(function(err){
				res.status(400).json({message:"failed to increase like :("});
			})
		});
	}
	this.addcomment = function(req,res){
		var auth = jwt.checkToken(req.headers,res);
		if (auth == false){
			res.status(400).json({message:"Login first!"});
		}else{
			var username = auth.username;
			var idpost = req.body._id;
			var commentcontent = req.body.commentcontent;
			Post.findByIdAndUpdate(
				idpost,
				{$push:{"comment":{commentcontent:commentcontent,username:username}}},
				{safe: true, upsert: true, new : true},
				function(err,post){
					if (err){
						console.log(err);
					}else{
						res.status(200).json({message:"comment get posted!"});
					}
				});
		}
	}

	this.create = function(req,res){
		var auth = jwt.checkToken(req.headers,res);
		if (auth == false){
			res.status(400).json({message:"You're not login in :/"});
		}else{
			var username = auth.username;
			var content = req.body.content;
			var title  = req.body.title;
			var comment = req.body.comment;
			Post
				.create({content:content,comment:comment,username:username})
				.then(function(){
					res.status(200).json({message:"gratz, post created!"});
				})
				.catch(function(err){
					console.log(err);
				})
		}
	}
}

module.exports = new PostController();