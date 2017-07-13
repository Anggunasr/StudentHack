const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt	= require('jsonwebtoken');
const path = require('path');
const cors = require('cors');
const port = 4000;
const database = 'mongodb://localhost/studenthack';

//connect to mongodb
mongoose.connect(database);
mongoose.Promise = global.Promise;

mongoose.connection.on('connected',()=>{
	console.log("connected to database at "+database);
});

//set up express app
const app = express();

//cors middleware
app.use(cors());

//Set Static path
app.use(express.static(path.join(__dirname,'dist')));

// Body-Parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes for models
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

app.get('/',(req,res)=>{
	res.status(400).json({message:"Invaled API"});
})


//Set static folder
//app.use(express.static(path.join(__dirname, '../dist')));



//listen for request
app.listen(port,()=>{
	console.log("server started at "+port);
})