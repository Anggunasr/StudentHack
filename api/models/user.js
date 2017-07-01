//school regulator login_type = 3
//admin web login_type = 4
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create user Schema & model
var UserSchema = new Schema({
	username:{
		type: String,
		required:[true,'username field is required']
	},
	password:{
		type: String,
		required:[true,'butuh banget diisi']
	},
	login_type:{
		type: Number,
		default: 3
	},
	status_user:{
		type: Boolean,
		default: true	,
		required:true
	},
	schoolname:{
		type: String,
		require:true
	}
});

const User = mongoose.model('users',UserSchema);

module.exports = User;