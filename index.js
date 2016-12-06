var express = require('express'), bodyParser = require('body-parser'), form = require('express-form'), field = form.field;

// env variable to help determine what environment we are in
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var ejs = require('ejs')

app.set('view engine', 'ejs');
// adds route to deliver index page
app.use(express.static('public/assets'));
app.use(express.static('server/views'));
app.use(bodyParser());

// adds route to deliver index page
app.get('/', function(req, res) {
  res.render(__dirname + '/server/views/playground.ejs');
});

// 
app.get('/html', function(req, res) {
  res.render(__dirname + '/server/views/html/html.ejs');
});

// 
app.get('/css', function(req, res) {
  res.render(__dirname + '/server/views/css/css.ejs');
});

// 
app.get('/js', function(req, res) {
  res.render(__dirname + '/server/views/js/js.ejs');
});

// 
app.get('/template', function(req, res) {
  res.render(__dirname + '/server/views/template.ejs');
});

// 
app.get('/version2', function(req, res) {
  res.render(__dirname + '/server/views/test_run.ejs');
});

// 
app.get('/cm', function(req, res) {
  res.render(__dirname + '/server/views/codemirror_ex.ejs');
});
var port = 3030;
    app.listen(port);
console.log('Listening on port ' + port + '...');