//login_type = 2
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create parent Schema & model
var ParentSchema = new Schema({
	username:{
		type: String
	},
	name: {
		type:String
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
	student:{
		type: String
	},
	sr:{
		type:String,
		require:true
	}//sr that's mean school regulator who created data parent 


});

const Parent = mongoose.model('parents',ParentSchema);

module.exports = Parent;
