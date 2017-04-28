// SERVER-SIDE JAVASCRIPT

const questionsList = [
  {id: 0, question: "XX What reallyis Batman's guilty pleasure?"},
  {id: 1, question: "I'm sorry professor, I couldn't complete my homework because _________."},
  {id: 2, question: "I get by with a little help from _________."},
  {id: 3, question: "_________. It's a trap!"},
  {id: 4, question: "The class field trip was completely ruined by _________."},
  {id: 5, question: "What's my secret power?"}
];

//require express in our app
var express = require('express');

var app = express();

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
	console.log(req.body);
	questionsList.push(req.body);
	res.json({questionsList});
});

// SHOW
app.get('/cards/:id', function(req, res){
	console.log('SHOW');
	const showCard = questionsList[req.params.id];
	res.json({showCard});
});

// CREATE
app.post('/cards/', function(req, res){
	console.log('CREATE');
	console.log('XXreqXX: ' + Object.keys(req.body));
	res.json({hey: 'YOU'});
});

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});