
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create post Schema & model
var PostSchema = new Schema({
	content:{
		type: String
	},
	idpembuat:{
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
		type: Number,
		default:0
	}
});

const Post = mongoose.model('posts',PostSchema);

module.exports = Post;