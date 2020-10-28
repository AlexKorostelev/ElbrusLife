const express = require('express');
const multer = require('multer');

const User = require('../models/user');
const upload = multer({ dest: 'uploads/'});
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('profile');
});

router.get('/edit', (req, res) => {
  res.render('profileEdit');
});

router.post('/edit', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  const email = { email: 'mr.burbu@mail.ru' }; // req.session.user.email
  const user = User.findOneAndUpdate(email, {
    name: req.body.name,
    surname: req.body.surname,
    gender: req.body.gender,
    birthday: req.body.gender,
    useremail: req.body.useremail,
  });
  console.log(req.body);
  res.render('profile');
});

module.exports = router;
