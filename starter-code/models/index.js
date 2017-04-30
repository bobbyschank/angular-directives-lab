// Database Setup
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cards');
let Schema = mongoose.Schema;
let CardSchema = new Schema({
	question: String,
});
let Card = mongoose.model('Card', CardSchema);

module.exports.Card = Card;