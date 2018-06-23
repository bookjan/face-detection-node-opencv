const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const ngrok = require('ngrok');

const httpPort = 8080;

// app parameters
const app = express();
app.set('port', httpPort);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//random public URL created by ngrok, default is localhost
let ngrokURL = `http://localhost:${app.get('port')}`;

// serve index
app.get('/', function (req, res) {
  res.render('index', { title: 'face detection', url: ngrokURL }); //render index.html and interpolate the url constiable
});

// HTTP server
const server = http.createServer(app);
server.listen(app.get('port'), '0.0.0.0', function () {
  console.log('HTTP server listening on port ' + app.get('port'));
});

// WebSocket server
const io = require('socket.io')(server);
io.on('connection', require('./lib/routes/socket'));

// Get ngrok url 
(async function () { // IIFE: Immediately Invoked Function Expression
  ngrokURL = await ngrok.connect(app.get('port'));
  console.log('ngrokURL', ngrokURL);
})();

module.exports.app = app;