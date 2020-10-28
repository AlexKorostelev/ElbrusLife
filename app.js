const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser'); // to save cookie from client into req.cookies
const mongoose = require('mongoose');
const session = require('express-session'); // to control sessions
const MongoStore = require('connect-mongo')(session); // to store in MongoDB

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const profileRouter = require('./routes/profile');
const leaderBoardRouter = require('./routes/leaderboard');

// mongoose connection
mongoose.connect('mongodb://localhost:27017/elbruslife', {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false}).then(() => console.log('Mongoose connected!')).catch(() => console.log('Error!'));
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // so we can send data from post requests
app.use(cookieParser()); // it saves cookies from browser everytime into req.cookies
app.use(express.static(path.join(__dirname, 'public'))); // Public folder

// middleware for session - saving cookies
app.use(session({
  store: new MongoStore({ // storing in mongodb via mongostore
    mongooseConnection: mongoose.createConnection('mongodb://localhost:27017/elbruslife', { useNewUrlParser: true, useUnifiedTopology: true }),
  }),
  secret: 'rg9ii645terg9hjio6k5elrpf',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 4599678, httpOnly: false, },
}));

// middleware to create res locals so we can get user info on any route
app.use( async (req, res, next) => {
  res.locals.user = req.session.user // Саша, запихни пожалуйста в req.session.USER информацию после регистрации
  next();
})

// routers
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

app.listen(3000, () => console.log('Server is on 3000'));
