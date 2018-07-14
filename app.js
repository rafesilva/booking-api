const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const timeRoutes = require('./api/routes/times');
const dateRoutes = require('./api/routes/dates');
const cors = require('cors');



mongoose.connect('mongodb+srv://rafesilva:' + process.env.MONGO_ATLAS_PW + '@mongoose-demo-m0nct.mongodb.net/test?retryWrites=true', 

	{ useNewUrlParser: true }
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
	res.header('Access-Controll-Allow-Origin', '*');
	res.header("Access-Controll-Allow-Header', 'Origin, X-Requested-With, Content-type, Accept, Authorization"
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});

app.use('/times', timeRoutes);
app.use('/dates', dateRoutes);

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = app;
