// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var app = express();

// Connect to db
let db = require('./models');

// Set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/front-end'));

app.get('/', function (req, res){
	console.log('res' + res);
  res.sendFile(__dirname + '/front-end/index.html');
});
console.log('server');

// INDEX
app.get('/cards/', function(req,res){
	console.log('INDEX');
	db.Card.find({}, function(err, foundCards) {
		console.log('foundCards: ' + foundCards);
		res.json(foundCards);
	});
});

// SHOW
app.get('/cards/:id', function(req, res){
	console.log('SHOW');
	const paramsId = req.params.id;
	db.Card.findOne({_id: paramsId }, function(err, foundCard) {
		if (err) {console.log('SHOW Error: ' + err);}
		res.json(foundCard);
	});
});

// CREATE
app.post('/cards/', function(req, res){
	console.log('CREATE');
	console.log('XXreqXX: ' + Object.keys(req.body));
	console.log(req.body);
	let newCard = new db.Card({
		question: req.body.question,
	});
	newCard.save(function(err, card) {
		if(err) {console.log('CREATE Error: ' + err);}
		console.log('CREATE Successful.');
		res.json(card);
	});
});

// UPDATE
app.put('http://localhost:3000/cards/:id', function(req, res){
	
});

// DELETE
app.delete('/cards/:id', function(req, res){
	console.log('In DELETE');
	const deleteId = req.params.id;
	db.Card.findOneAndRemove({ _id: deleteId }, function(err, deletedCard){
		res.json(deletedCard);
	});
});

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});