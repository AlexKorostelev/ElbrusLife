const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const profileRouter = require('./routes/profile');
const leaderBoardRouter = require('./routes/leaderboard');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profile', profileRouter);
app.use('/leaderboard', leaderBoardRouter);

// catch 404
app.use((req, res, next) => {
  console.log('>>>>>', req.url, '<<<<< 404 - ROUTE not found!');
  next();
});

// log of error
app.use((err, req, res, next) => {
  console.error('err', err);
});

app.listen(3000, () => console.log('Server is on'));

module.exports = app;
