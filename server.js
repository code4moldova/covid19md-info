var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();
app.use('/newdesign', express.static('newdesign'));
app.use('/CoolAdmin', express.static('CoolAdmin'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.all('*', function(req, res, next){
  if(req.path.endsWith('.html')){
    var cur_url = req.path.slice(0, -5);
    if (cur_url.endsWith('index')) {
        res.redirect('/');
    }
    res.redirect(cur_url);
  } else {
    next();
  }
});

app.get('/', function(req, res) {
	res.render('pages/index');
});

app.get('/despre', function(req, res) {
	res.render('pages/despre');
});

app.get('/covid19', function(req, res) {
	res.render('pages/covid19');
});

app.get('/chart', function(req, res) {
	res.render('pages/chart');
});

app.get('/datelazi-covid19-md', function(req, res) {
	res.render('pages/datelazi-covid19-md');
});

app.get('/datelazi-covid19-md', function(req, res) {
	res.render('pages/datelazi-covid19-md');
});

app.get('/juridic', function(req, res) {
	res.render('pages/juridic');
});


app.get('/recomandari', function(req, res) {
	res.render('pages/recomandari');
});

app.get('/simptome', function(req, res) {
	res.render('pages/simptome');
});

app.get('/timeline', function(req, res) {
	res.render('pages/timeline');
});

app.listen(8882);
console.log('8882 portul unde se invarte client-ul');