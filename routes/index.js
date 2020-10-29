/* eslint-disable no-alert */
const express = require('express');

const router = express.Router();
const User = require('../models/user');

const checkUser = (req, res, next) => {
  const sessionUser = req.session?.name;
  console.log('SESSION_USER===>', sessionUser);
  if (!sessionUser) {
    console.log('Пользователь не найден!!!');
    return res.redirect('/login');
  }
  next();
};

/* Main page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

/* Авторизация */
router.get('/login', async (req, res, next) => {
  res.redirect('/');
});

router.post('/login', async (req, res, next) => {
  const user = req.body;
  const userdb = await User.findOne({ email: user.email });
  // console.log('POST /login', userdb);

  if (userdb) {
    if (userdb.pass === user.pass) {
      req.session.user = userdb;
      // console.log('LOGIN, ПАРОЛЬ СОВПАЛ!!! ЗАЛОГИНИЛИСЬ КАК ===>', userdb.name);
      return res.sendStatus(200);
    }
  }
  // console.log('LOGIN, НЕВЕРНЫЙ ПАРОЛЬ!');
  res.render('error', { message: 'Неверный пароль!', layout: false });
});

/* Регистрация */
router.get('/registration', async (req, res, next) => {
  // res.render('registration');
  res.redirect('/');
});

router.post('/registration', async (req, res, next) => {
  const user = req.body; // Загружаем данные, переданные с фронта по fetch на POST-ручку
  const userExist = await User.findOne({ email: user.email }); // Ищем в базе юзера с подобным email

  if (userExist) {
    res.render('error', { message: 'Пользователь с таким email уже зарегистрирован!', layout: false });
    console.log('ЮЗЕР С ТАКИМ EMAIL УЖЕ СУЩЕСТВУЕТ!');
    return;
  }
  const newuser = new User(user);
  await newuser.save();
  req.session.user = user; // Заносим объект user в сессию
  res.render('index', { name: user.name });
  console.log('REGISTRATION USER CREATED AND SAVED IN DB!', user);
});

/* Выход из профиля */
router.get('/logout', async (req, res, next) => {
  console.log('ЗАШЛИ В LOGOUT!');
  req.session.destroy(); // удаляем сессию
  res.redirect('/');
});

module.exports = router;
