var express = require('express');
var crypto = require('crypto');
var jwt = require('../token');
var Converter = require("csvtojson").Converter;

var Teacher = require('../models/teacher');

function TeacherController(){
	this.getall = function(data,res){
		Teacher.find().then(function(result){
			res.status(200).json({message:"succes",data:result});
		}).catch(function(err){
			console.log(err);
		})
	}
}

module.exports = new TeacherController();
