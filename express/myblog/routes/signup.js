const express = require("express");
const router = express.Router();

const { checkNotLogin } = require("../middlewares/check");

// GET /signup 注册页
router.get("/signup/", checkNotLogin, (req, res, next) => {
	res.render('signup')
});

// POST /signup 用户注册
router.post("/signup/", checkNotLogin, (req, res, next) => {
	res.send("注册");
});

module.exports = router;
