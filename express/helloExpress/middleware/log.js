module.exports = {
	sendUserMessage(req, res, next) {
		console.log('send log');
		next();
	}
};