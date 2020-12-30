const express = require('express');
const routes = require('./routes/main');

const app = express();

routes.register(app);

app.listen(3000);