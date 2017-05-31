//login_type = 1
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create user Schema & model
var TeacherSchema = new Schema({
	username:{
		type: String
	},
	name:{
		type: String,
		required:[true,'name is required']
	},
	gender:{
		type: String,
		default: null
	},
	subject:{
		type: String,
		default: null
	},
	handphone:{
		type: String,
		default: null
	},
	address:{
		type: String,
		default: null
	},
	email:{
		type: String,
		default: null
	},
	birthday:{
		type : Date,
		default: null
	},
	class_id:{
		type: String,
		default: null
	}

});

const Teacher = mongoose.model('teachers',TeacherSchema);

module.exports = Teacher;