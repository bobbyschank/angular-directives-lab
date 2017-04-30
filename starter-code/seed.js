let db = require('./models');

let cards_list = [
  {id: 0, question: "XX What reallyis Batman's guilty pleasure?"},
  {id: 1, question: "I'm super sorry professor, I couldn't complete my homework because _________."},
  {id: 2, question: "I get by with a little help from _________."},
  {id: 3, question: "_________. It's a trap!"},
  {id: 4, question: "The class field trip was completely ruined by _________."},
  {id: 5, question: "What's my secret power?"}
];

db.Card.remove({}, function(err, cards) {
	console.log('removed all cards in the name of SEED.');
	db.Card.create(cards_list, function(err, cards) {
		if(err) {
			console.log(err);
			return;
		}
		console.log('created cards in db');
	});
});