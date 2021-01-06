const express = require('express');
const router = express.Router();

const LIST = [
	require('./index')
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
