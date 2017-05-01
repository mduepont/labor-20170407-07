const express = require('express');

const hello = require('./handler/hello');
const root = require('./handler/root');

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views');

app.get('/', root);

app.get('/hello', hello);

app.listen(8080);