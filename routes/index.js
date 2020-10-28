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
  const { name, email, pass } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    alert('Такой пользователь уже существует!');
    return;
  }
  const newuser = new User({ name, email, pass });
  await newuser.save();
  req.session.name = name;
  console.log('REGISTRATION USER CREATED AND SAVED IN DB!', name);
});

/* Выход из профиля */
router.get('/logout', async (req, res, next) => {
  console.log('ЗАШЛИ В LOGOUT!');
  req.session.destroy(); // удаляем сессию
  res.redirect('/');
});

/* Регистрация */
router.get('/registration', async (req, res, next) => {
  res.render('registration');
});

module.exports = router;
