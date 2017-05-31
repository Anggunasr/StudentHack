//login_type = 2
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create user Schema & model
var StudentSchema = new Schema({
	username:{
		type: String
	},
	name: {
		type:String
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
	class_id:{
		type: String,
		default: null
	}

});

const Student = mongoose.model('students',StudentSchema);

module.exports = Student;
