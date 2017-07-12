var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create task Schema & model
var TaskSchema = new Schema({
	name:{
		type: String
	},
	idpembuat:{
		type: String,
		required:[true,'need an id']
	},
	date:{
		type: Date
	},
	class:{
		id_class: String
	}
});

const Task = mongoose.model('tasks',TaskSchema);

module.exports = Task;