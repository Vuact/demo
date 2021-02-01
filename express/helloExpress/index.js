const express = require('express');
const routes = require('./routes/main');
const log = require('./middleware/log');
const render = require('./middleware/render');
const error = require('./middleware/error');

const app = express();

app.use('/static', express.static('public'));
app.use(log.sendUserMessage);  //发用户信息日记
app.use(render(app)); //渲染 

routes.register(app);

app.use(error.logErrors);//将请求和错误信息写入 stderr
app.use(error.clientErrorHandler);//错误会显式传递到下一项
app.use(error.errorHandler);

app.listen(3000);