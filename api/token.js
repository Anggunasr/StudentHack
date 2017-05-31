var jwt = require('jsonwebtoken');
var secret = 'studenthackadmin';

function Token(){
	this.createToken = function(data,res){
		var token = jwt.sign(data,secret);
		return token;
	}
	
	this.checkToken = function(data,res){
		var token = data.body.token || data.query.token || data.headers['authorization'];
		try{
			var decoded = jwt.verify(token,secret);
			return decoded;
		}catch(err){
			return false;
		}
	}
}
module.exports = new Token();