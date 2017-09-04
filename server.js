var express = require('express');
var app = express();

var result = { "unix": null, "natural": null };
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/:date([0-9]*)', function(req, res) {
	var result = {};
	var timestamp = parseInt(req.params.date);

	var date = new Date(timestamp * 1000);
	result.unix = timestamp;
	result.natural = (months[date.getMonth()]) + ' ' + date.getDate() + ', ' + date.getFullYear();

	res.send(result);
});

app.get('/:natString([a-zA-Z]*)', function(req, res) {
	var result = {};

	var dateArr = req.params.natString.split(' ');
	var month = months.indexOf(dateArr[0]);
	var day = dateArr[1];
	var year = dateArr[2];

	result.natural = req.params.natString; // this will need to be moved.

	console.log(dateArr);
	console.log();

	res.send(result);
});

app.listen(8080, function() {
	console.log('App listening on port 8080.');
});