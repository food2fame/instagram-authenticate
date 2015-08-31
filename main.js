// node.js server script

var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.resolve(path.dirname()) + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get('/index', function(req, res){
	res.render('index.html');
});

app.listen(8000)