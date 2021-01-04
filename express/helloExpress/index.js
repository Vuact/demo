const path = require('path');
const express = require('express');
const routes = require('./routes/main');

const app = express();

app.set('views', path.join(__dirname, 'views')); // 设置存放模板文件的目录
app.set('view engine', 'ejs'); // 设置模板引擎为 ejs

routes.register(app);

app.listen(3000);