const express = require("express");
const router = express.Router();

const { checkLogin } = require("../middlewares/check");

// GET /signin 登录页
router.get("/signin/", (req, res, next) => {
	res.send("登录页");
});

// POST /signin 用户登录
router.post("/signin/", checkLogin, (req, res, next) => {
	res.send("登录");
});

module.exports = router;
