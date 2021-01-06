module.exports.hello = (req, res) => {
	res.render('index');

	//实际展开写：
	// res.render('index', {}, (err, html) => {
	// 	res.send(html);
	// });
};

