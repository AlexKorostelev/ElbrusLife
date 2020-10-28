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

/* Регистрация */
router.get('/registration', async (req, res, next) => {
  // res.render('registration');
  res.redirect('/');
});

router.post('/registration', async (req, res, next) => {
  const user = req.body; // Загружаем данные, переданные с фронта по fetch на POST-ручку
  const userExist = await User.findOne({ email: user.email }); // Ищем в базе юзера с подобным email

  if (userExist) {
    res.render('layout', { msgUserExist: 'Такой пользователь уже существует!' });
    console.log('ЮЗЕР С ТАКИМ EMAIL УЖЕ СУЩЕСТВУЕТ!');
    return;
  }
  const newuser = new User(user);
  await newuser.save();
  req.session.user = user; // Заносим объект user в сессию
  console.log('REGISTRATION USER CREATED AND SAVED IN DB!', user);
});

/* Выход из профиля */
router.get('/logout', async (req, res, next) => {
  console.log('ЗАШЛИ В LOGOUT!');
  req.session.destroy(); // удаляем сессию
  res.redirect('/');
});

module.exports = router;
