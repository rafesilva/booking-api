const mongoose = require('mongoose');

const dateSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	time: { type: mongoose.Schema.Types.ObjectId, ref: 'Time' },
	date: { type: Number, default: Date.now },
	month: { type: Number },
	year: { type : Number }
});

module.exports = mongoose.model('Day', dateSchema);