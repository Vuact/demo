const express = require("express");
const router = express.Router();
const { checkLogin } = require("../middlewares/check");

// POST /comments 创建一条留言
router.post("/comments/", checkLogin, (req, res, next) => {
	res.send("创建留言");
});

// GET /comments/:commentId/remove 删除一条留言
router.get("/comments/:commentId/remove", checkLogin, (req, res, next) => {
	res.send("删除留言");
});

module.exports = router;
