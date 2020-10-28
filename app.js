/* eslint-disable import/order */
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const MongoStore = require('connect-mongo')(session); // хранилице для сессий. можно использловать другие: https://github.com/expressjs/session#compatible-session-stores

const app = express();
const hbs = require('hbs');

// Подключаем mongoose.
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/elbruslife', { useNewUrlParser: true, useUnifiedTopology: true });

// view engine setup
app.set('views', 'views');
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(`${__dirname}/public`));

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.createConnection('mongodb://localhost:27017/elbruslife', { useNewUrlParser: true, useUnifiedTopology: true }),
  }),
  secret: 'rg9ii645terg9hjio6k5elrpfse',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 999999999999999 },
}));

app.use('/', (req, res, next) => {
  res.locals.user = req.session?.user;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);
