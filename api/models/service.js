const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: { type: String },
	description: { type: Text },
	duration: { type: Number },
	price: { type : Number }
});

module.exports = mongoose.model('Service', serviceSchema);