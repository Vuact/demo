module.exports.sayName = (req, res) => {
	res.render('users', {
		name: req.params.name
	});
};