module.exports.sayName = (req, res) => {
	res.send(`hello, ${req.params.name}`);
};