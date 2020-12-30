const express = require('express');
const router = express.Router();

const LIST = [
	require('./index'),
	require('./users')
];

module.exports.register = (app) => {
	for (let router of LIST) {
		app.use(router);
	}
};
