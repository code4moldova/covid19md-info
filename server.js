var express = require('express');
var path = require('path');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var i18n = require("i18n-express");

var app = express();
app.use('/newdesign', express.static('newdesign'));
app.use('/CoolAdmin', express.static('CoolAdmin'));
app.use(cookieParser());

app.use(i18n({
	translationsPath: path.join(__dirname, 'newdesign/i18n'),
	siteLangs: ["ro","ru"],
	textsVarName: 'translation',
	browserEnable: true,
	defaultLang: 'ro',
	paramLangName: 'lang',
	cookieLangName: 'clang'
}));
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

const host = process.env.NODE_HOST || '0.0.0.0';
const port = process.env.NODE_PORT || 8882;
app.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
