var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var jwt	= require('jsonwebtoken');


//set up express app
var app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/studenthack');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extented:true}));
app.use(bodyParser.json());
app.use('/api',require('./routes/api'));

//user controller
app.use('/users',require('./routes/user.routes'));

//register dari school regulator


//listen for request
app.listen(process.env.port || 4000,function(){
	console.log('now waiting request');
});