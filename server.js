var express    = require('express');
var path       = require('path');
var bodyparser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var port  = 3000;
var app   = express();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
  console.log('Listening to port ' + port);
});