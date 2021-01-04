const path = require('path');

module.exports = (app) => {
	return (req, res, next) => {
		app.set('views', path.join(process.cwd(), '/views')); // 设置存放模板文件的目录 (process.cwd()获得当前执行node命令时候的文件夹目录名)
		app.set('view engine', 'ejs'); // 设置模板引擎为 ejs

		next();
	};
};