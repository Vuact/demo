const express = require("express");
const router = express.Router();

const { checkLogin } = require("../middlewares/check");

// GET /signout 登出
router.get("/signout/", checkLogin, (req, res, next) => {
	res.send("登出");
});

module.exports = router;
