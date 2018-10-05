var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser'); // body parser middleware NEEDED FOR HANDLING BODY OF POST REQUESTS
var cors = require('cors');

var indexRouter = require('./routes/index');
var recipesRouter = require('./routes/recipes');
var recipeRouter = require('./routes/recipe');
var ingredientsRouter = require('./routes/ingredients');
var addRecipeRouter = require('./routes/addrecipe');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: true })); // body parser to handle json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// routes
app.use('/', indexRouter);
app.use('/recipes', recipesRouter);
app.use('/recipe', recipeRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/addrecipe', addRecipeRouter);
app.use(express.static('public')); // serves public folder for images

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
