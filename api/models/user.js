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
		default: 1
	},
	status_user:{
		type: Boolean,
		default: false
	}
});

const User = mongoose.model('users',UserSchema);

module.exports = User;