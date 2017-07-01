var express = require('express');
var jwt = require('../token');

//require models
var User = require('../models/user');
var Teacher = require('../models/teacher');
var Student = require('../models/student');
var Post = require('../models/posts');

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
}

module.exports = new PostController();