const cors = require('cors');
var createError = require('http-errors');
const bodyParser = require('body-parser')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./app_api/models/db');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_api/routes/users');
// var favRouter = require('./app_server/routes/favourites');
const apiRouter = require('./app_api/routes/index');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'blog-public', 'build')))

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/favourites', favRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;