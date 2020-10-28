const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const User = require('../models/user');

// Set Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: {fileSize: 1000000},
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('avatar');

// Check file type
function checkFileType(file, cb) {
  // expression for Alowed extenstion
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
  console.log('--------------------');
  const obj = { email: 'mr.burbu@mail.ru' };
  const { name, surname, email, gender, birthday, status } = await User.findOne(obj);
  console.log(name, surname, email, gender, birthday, status);
  res.render('profile', { name, surname, email, gender, birthday, status });
});

/* editing profile get REQUEST */
router.get('/edit', (req, res) => {
  res.render('profileEdit');
});

/* saving user edits */
router.post('/edit', async (req, res) => {
  upload(req, res, (err) => {
    if(err) {
      res.render('index', {message: err})
    } else {
      if (req.file === undefined) {
        res.render('index', {message: 'no file selected'})
      } else {
        res.render('index', {message: 'file uploaded',file: `uploads/${req.file.filename}`}) 
      }
      console.log(req.file);
      res.send('test');
    }
  });
  const email = { email: 'mr.burbu@mail.ru' }; // req.session.user.email
  const user = await User.findOneAndUpdate(email, {
    name: req.body.name,
    surname: req.body.surname,
    gender: req.body.gender,
    birthday: req.body.gender,
    useremail: req.body.useremail,
  });
  // console.log(req.body);
  req.session.user = user; // after user registered and logged in there is a session.user with email and password
  res.render('profile');
});

module.exports = router;
