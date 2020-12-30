const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/users/:name', controller.sayName);

module.exports = router;