const express = require('express');
const router = express.Router();

const LIST = [
	require('./index'),
	require('./signup'),
	require('./signin'),
	require('./signout'),
	require('./posts'),
	require('./comments')
];

// module.exports = {
// 	register(app) {
// 		console.log(1);
// 		for (let router in LIST) {
// 			app.use(router);
// 		}
// 	}
// };

module.exports.register = (app) => {
	for (let router of LIST) {
		app.use(router);
	}
};

module.exports.errorPage = (app) => {
	// 404 page
	app.use((req, res) => {
		if (!res.headersSent) {
			res.status(404).render("404");
		}
	});
};

