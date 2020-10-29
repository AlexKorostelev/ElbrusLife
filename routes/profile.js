const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const User = require('../models/user');

// Set Storage Engine for loading image
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload for loading image
const upload = multer({
  storage: storage,
  limits: {fileSize: 1000000},
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('avatar');

// Check file type
function checkFileType(file, cb) {
  // expression for allowed extenstions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true)
  } else {
    cb('Error: Images only');
  }
}


/* GET rendering with info of user */
router.get('/', async (req, res) => {
  console.log('res.locals.user.email', res.locals.user);
  // console.log('--------------------');
  const user = await User.findOne({email: res.locals.user.email});
  let newDate;
  if (user.birthday) {
    const day = user.birthday.getUTCDate();
    const month = user.birthday.getUTCMonth() + 1;
    const year = user.birthday.getUTCFullYear()
    newDate = day + '/' + month + '/' + year;
  }
  res.render('profile', {
    name: user.name,
    surname: user.surname,
    avatar: user.avatar,
    email: user.email,
    gender: user.gender,
    birthday: newDate,
    status: user.status
  });
  // console.log(name, surname, email, gender, birthday, status);
});

/* editing profile get REQUEST */
router.get('/edit', (req, res) => {
  if (!res.locals.user) {
    res.locals.user = {};
    res.locals.user.avatar = "defult.jpeg";
  }
  res.render('profileEdit', {
    name: res.locals.user?.name,
    surname: res.locals.user?.surname,
    avatar: res.locals.user.avatar,
    email: res.locals.user.email,
    gender: res.locals.user?.gender,
    birthday: res.locals.user?.birthday,
    status: res.locals.user.stauts});
});

/* saving user edits */
router.post('/edit', async (req, res) => {
  upload(req, res, async (err) => { // saving img into upload file
    if(err) {
      res.render('profileEdit', {message: err});
      console.log(req.file, '<<<<<<<< req File in UPLOAD');
    } else {
      /* object with req.body info */
      const user = await User.findOneAndUpdate({email: res.locals.user.email}, {$set: {
        name: req.body.name,
        surname: req.body.surname,
        avatar: req.file.filename,
        gender: req.body.usergender,
        birthday: req.body.birthday,
        email: req.body.email,
      }}, {new: true}); // waiting for login or registration
      console.log(user, '<<<< USER in DB');
      req.session.user = userbody; // after user registered and logged in there is a session.user with email and password
      console.log(req.session.user , '<<<<<<<<<<REQ SES USER');
      res.redirect('/profile');
    }
  });
});

module.exports = router;
