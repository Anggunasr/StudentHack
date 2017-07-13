
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create post Schema & model
var PostSchema = new Schema({
	content:{
		type: String
	},
	username:{
		type: String
	},
	comment:[
	{
		commenctcontent:{
			type: String
		},
		username:{
			type: String
		},
		commentdate:{
			type: Date,
			default: Date.now
		}
	}],
	date:{
		type: Date,
		default: Date.now
	},
	like:{
		type: Number,
		default:0
	}
});

const Post = mongoose.model('posts',PostSchema);

module.exports = Post;