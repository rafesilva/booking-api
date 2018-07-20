const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	console.dir('IS HEREREEE', req)
	try { 
		const token = req.headers.authorization.split(" ")[1];
		console.dir(req.headers)
		const decoded = jwt.verify(token, process.env.JWT_KEY);
		req.userData = decoded;
		next();
	} catch (error) {
			console.dir('BEFORE', req.headers)

		return res.status(401).json({
			message: 'Auth failed'
		});
	}

};