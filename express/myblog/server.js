const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const config = require('config-lite')({
	filename: 'default',
	config_basedir: __dirname,
	config_dir: 'config'
});

const routes = require('./routes/main');


const app = express();

app.set('views', path.join(__dirname, 'views'));//设置模板目录
app.set('view engine', 'ejs');//设置模板引擎

app.use(express.static(path.join(__dirname, 'public')));//设置静态文件目录


//session中间件
// app.use(session({
// 	name: config.session.key,
// 	secret: config.session
// }));

//flash中间件，用来显示通知
//app.use(flash());

routes.register(app);


app.listen(4000, () => {
	console.log('listen on port 4000');
});
