
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create post Schema & model
var PostSchema = new Schema({
	content:{
		type: String
	},
	maker:{
		type: String,
		required:[true,'need an id']
	},
	title:{
		type: String,
		default:"Title of the post"
	},
	comment:{
		commentid:{
			type: String
		},
		commenctcontent:{
			type: String
		},
		idmaker:{
			type: String
		},
		commentdate:{
			type: Date
		}
	},
	date:{
		type: Date
	},
	like:{
		type: Integer,
		default:0
	}
});

const User = mongoose.model('users',UserSchema);

module.exports = User;