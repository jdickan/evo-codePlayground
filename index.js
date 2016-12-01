var express = require('express'), bodyParser = require('body-parser'), form = require('express-form'), field = form.field;

// env variable to help determine what environment we are in
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var ejs = require('ejs')

app.engine('html', require('ejs').renderFile);
// adds route to deliver index page
app.use(express.static('public/assets'));
app.use(express.static('server/views'));
app.use(bodyParser());

// adds route to deliver index page
app.get('/', function(req, res) {
  res.render(__dirname + '/server/views/playground.html');
});

var port = 3030;
    app.listen(port);
console.log('Listening on port ' + port + '...');