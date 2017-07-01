var ongoose = require('mongoose');
var Schema = mongoose.Schema;

// create class Schema & model
var SubjectmatterSchema = new Schema({
	name:{
		type: String
	},
	class:{
		type: String
	}
});

const Subjectmatter = mongoose.model('subjectmatters',SubjectmatterSchema);

module.exports = Subjectmatter;