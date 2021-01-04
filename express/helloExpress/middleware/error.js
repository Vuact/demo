module.exports = {
	//将请求和错误信息写入 stderr
	logErrors(err, req, res, next) {
		console.error(err.stack);
		next(err);
	},

	//错误会显式传递到下一项
	clientErrorHandler(err, req, res, next) {
		if (req.xhr) {
			res.status(500).send({ error: "Something failed!" });
		} else {
			next(err);
		}
	},

	errorHandler(err, req, res, next) {
		if (res.headersSent) {
			//委托给 Express 中的缺省错误处理机制处理
			return next(err);
		}

		//自定义处理
		res.status(500);
		res.render("error", { error: err });
	}
};
