var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create class Schema & model
var ClassSchema = new Schema({
	name:{
		type: String
	},
	walikelas:{
		type: String,
		required:[true,'need an id']
	},
	sr:{
		type:String,
		require:true
	}//sr that's mean school regulator who created class
});

const Class = mongoose.model('classes',ClassSchema);

module.exports = Class;