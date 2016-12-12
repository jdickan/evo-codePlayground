var express = require('express'), bodyParser = require('body-parser'), form = require('express-form'), field = form.field;

// env variable to help determine what environment we are in
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var ejs = require('ejs')

app.set('view engine', 'ejs');
app.use(express.static('public/assets'));
app.use(express.static('server/views'));
app.use(bodyParser());

// adds route to deliver index page
app.get('/', function(req, res) {
  res.render(__dirname + '/server/views/test_run.ejs');
});

// This is the route needed to serve up the html page
app.get('/html', function(req, res) {
  res.render(__dirname + '/server/views/html/html.ejs');
});

// This is the route needed to serve up the css page
app.get('/css', function(req, res) {
  res.render(__dirname + '/server/views/css/css.ejs');
});

// This is the route needed to serve up the js page
app.get('/js', function(req, res) {
  res.render(__dirname + '/server/views/js/js.ejs');
});

// This is the route needed to serve up the page that everything is compiled on.  This page is displayed at first.  Edits made to the code clear this out and are placed in the preview box.
app.get('/template', function(req, res) {
  res.render(__dirname + '/server/views/template.ejs');
});

var port = 3030;
    app.listen(port);
console.log('Listening on port ' + port + '...');