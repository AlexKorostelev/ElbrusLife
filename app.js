const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser'); // to save cookie from client into req.cookies
const mongoose = require('mongoose');
const session = require('express-session'); // to control sessions
const MongoStore = require('connect-mongo')(session); // to store in MongoDB
const hbs = require('hbs');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const profileRouter = require('./routes/profile');
const leaderBoardRouter = require('./routes/leaderboard');
const schedulesRouter = require('./routes/schedules');
const logger = require('morgan');

// mongoose connection
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false }).then(() => console.log('Mongoose connected!')).catch(() => console.log('Error!'));
const app = express();

// view engine setup
app.set('views', 'views');
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // so we can send data from post requests
app.use(cookieParser()); // it saves cookies from browser everytime into req.cookies
app.use(express.static(path.join(__dirname, 'public'))); // Public folder

// middleware for session - saving cookies
app.use(session({
  store: new MongoStore({ // storing in mongodb via mongostore
    mongooseConnection: mongoose.createConnection(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }),
  }),
  secret: process.env.SECRET_KEY, // 'rg9ii645terg9hjio6k5elrpf',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 999999999999999, httpOnly: false },
}));


// middleware to create res locals so we can get user info on any route
app.use(async (req, res, next) => {
  res.locals.user = req.session?.user;
  console.log(res.locals.user, 'RES LOCALS MIDDLEWARE USER');
  next();
});

// checking if user logged in (if username in req.session)
function CheckUser(req, res, next) {
  const sessionUser = req.session?.user;
  if (!sessionUser) {
    return res.redirect('/');
  }
  next();
}

app.use('/', indexRouter);
app.use('/users', CheckUser, usersRouter);
app.use('/profile', CheckUser, profileRouter);
app.use('/leaderboard', CheckUser, leaderBoardRouter);
app.use('/schedules', schedulesRouter);
// catch 404
app.use((req, res, next) => {
  console.log('>>>>>', req.url, '<<<<< 404 - ROUTE not found!');
  next();
});
// app.use(
//   (req, res, next) => {
//     res.locals.username = schedules.lesson;
//     next();
//   }
// )

// log of error
app.use((err) => {
  console.error('err', err);
});

app.listen(process.env.PORT, () => console.log(`Server is on ${process.env.PORT}`));