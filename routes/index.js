var express = require('express');
var router = express.Router();
var routesController = require('../controllers/routesController');
var connection = require('../config/connection');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/cases', function(req, res, next){
	// do something with connection

	console.log('hitting /db/cases');
	connection.query('SELECT * FROM `cases`', function(err, results, fields){
		console.log(results);
		res.status(200).json(results);
//		res.send('ok');
	});
});

module.exports = router;
