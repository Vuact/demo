module.exports = () => {
	return (req, res, next) => {
		console.log('send log');
		next();
	};
};