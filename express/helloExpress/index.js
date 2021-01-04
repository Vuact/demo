const express = require('express');
const routes = require('./routes/main');
const log = require('./middleware/log');
const render = require('./middleware/render');

const app = express();

app.use(log());  //发日记
app.use(render(app)); //渲染 

routes.register(app);

app.listen(3000);