var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/scripts', express.static(path.join(__dirname, 'node_modules/clientjs/dist')));

app.listen(3000, function(){
  console.log("Sever started");
})
