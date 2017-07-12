var express = require('express');
var jwt = require('../token');

//require models
var Post = require('../models/post');

//function for post
function PostController(){
	this.getall = function(req,res){
		Post.find().then(function(result){
			res.status(200).json({data:result});
		})
		.catch(function(err){
			res.status(406).json({message:err});
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
}

module.exports = new PostController();