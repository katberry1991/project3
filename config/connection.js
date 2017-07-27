var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
	connection = mysql.createConnection({
		host:"127.0.0.1",
		user:"root",
		password:"bradbury451",
		database: "kioskdb"
	})
}

connection.connect(function(err){
	if(err){
		console.log('error connecting: ');
		console.log(err);
	} else {
		console.log('connected!');
	}
});

module.exports = connection;