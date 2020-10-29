/* eslint-disable no-alert */
const express = require('express');

const router = express.Router();
const User = require('../models/user');

/* Main page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

/* Авторизация */
router.get('/login', async (req, res) => {
  res.redirect('/');
});

router.post('/login', async (req, res) => {
  const user = req.body;
  const userdb = await User.findOne({ email: user.email });
  // console.log('POST /login', userdb.name, userdb.email, userdb.password);

  if (userdb) {
    if (userdb.password === user.password) {
      req.session.user = userdb;
      console.log('LOGIN, ПАРОЛЬ СОВПАЛ!!! ЗАЛОГИНИЛИСЬ КАК ===>', userdb.name);
      res.render('error', { message: '_', layout: false });
      // res.sendStatus(200);
      // res.status(200);
    } else {
      res.render('error', { message: 'Неверный логин / пароль!', layout: false });
    }
  } else {
    res.render('error', { message: 'Неверный логин / пароль!', layout: false }); // Юзер не найден
  }
});

/* Регистрация */
router.get('/registration', async (req, res) => {
  res.redirect('/');
});

router.post('/registration', async (req, res) => {
  const user = req.body; // Загружаем данные, переданные с фронта по fetch на POST-ручку
  const userExist = await User.findOne({ email: user.email }); // Ищем в базе юзера с подобным email

  if (userExist) {
    res.render('error', { message: 'Пользователь с таким email уже зарегистрирован!', layout: false });
    // console.log('ЮЗЕР С ТАКИМ EMAIL УЖЕ СУЩЕСТВУЕТ!');
    return;
  }
  const newuser = new User(user);
  await newuser.save();
  req.session.user = user; // Заносим объект user в сессию
  res.render('index', { name: user.name });
  // console.log('REGISTRATION USER CREATED AND SAVED IN DB!', user);
});

/* Выход из профиля */
router.get('/logout', async (req, res) => {
  // console.log('ЗАШЛИ В LOGOUT!');
  req.session.destroy(); // удаляем сессию
  res.redirect('/');
});

module.exports = router;
