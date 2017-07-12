var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt	= require('jsonwebtoken');


//set up express app
var app = express();

//connect to mongodb
//var promie = mongoose.connect('mongodb://localhost/studenthack',{
//	useMongoClinet:true,
//});

mongoose.connect('mongodb://localhost/studenthack');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//user controller
app.use('/user',require('./routes/user.routes'));

//admin controller
app.use('/admin',require('./routes/admin.routes'));

//class controller
app.use('/class',require('./routes/class.routes'));

//teacher controller
app.use('/teacher',require('./routes/teacher.routes'));

//post controller
app.use('/post',require('./routes/post.routes'));

//listen for request
app.listen(process.env.port || 4200,function(){
	console.log('now waiting request');
});