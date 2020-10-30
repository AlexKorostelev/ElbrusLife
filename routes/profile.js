const express = require('express');
const path = require('path');

const router = express.Router();
const multer = require('multer');
const User = require('../models/user');

// Set Storage Engine for loading image
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

// Init Upload for loading image
const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter(req, file, cb) {
    checkFileType(file, cb);
  },
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
    return cb(null, true);
  }
  cb('Error: Images only');
}

/* GET rendering with info of user */
router.get('/', async (req, res) => {
  const user = await User.findOne({ email: res.locals.user.email });
  /* changing date time to dd/mm/yyyy */
  let newDate;
  if (user.birthday) {
    const day = user.birthday.getUTCDate();
    const month = user.birthday.getUTCMonth() + 1;
    const year = user.birthday.getUTCFullYear();
    newDate = `${day}/${month}/${year}`;
  }
  res.render('profile', {
    name: user.name,
    surname: user.surname,
    avatar: user.avatar,
    email: user.email,
    gender: user.gender,
    birthday: newDate,
    status: user.status,
  });
  // console.log(name, surname, email, gender, birthday, status);
});

/* editing profile get REQUEST */
router.get('/edit', (req, res) => {
  if (!res.locals.user) {
    res.locals.user = {};
    res.locals.user.avatar = 'defult.jpeg';
  }
  /* setting proper date for birthday value */
  let birthDate;
  if (res.locals.user.birthday) {
    let day = new Date(res.locals.user.birthday);
    day = day.getUTCDate();
    if (day < 10) {
      day = `0${day}`;
    }
    let month = new Date(res.locals.user.birthday);
    month = month.getUTCMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let year = new Date(res.locals.user.birthday);
    year = year.getUTCFullYear();
    birthDate = `${year}-${month}-${day}`;
  }
  console.log(birthDate);
  res.render('profileEdit', {
    name: res.locals.user?.name,
    surname: res.locals.user?.surname,
    imgsource: res.locals.user.avatar,
    email: res.locals.user.email,
    gender: res.locals.user?.gender,
    birthday: birthDate,
    status: res.locals.user.status,
  });
});

/* saving user edits */
router.post('/edit', async (req, res) => {
  upload(req, res, async (err) => { // saving img into upload file
    if (err) {
      res.render('profileEdit', { message: err });
    } else {
      /* object with req.body info */
      let avatar;
      /* if user did not upload img - we keep his previous img */
      if (req.file?.filename) {
        avatar = req.file.filename;
      } else {
        avatar = res.locals.user.avatar;
      }
      const user = await User.findOneAndUpdate({ email: res.locals.user.email }, {
        $set: {
          name: req.body.name,
          surname: req.body.surname,
          avatar,
          gender: req.body.usergender,
          birthday: req.body.birthday,
          email: req.body.email,
        },
      }, { new: true }); // waiting for login or registration
      res.locals.user = user; // after user registered and logged in there is a session.user with email and password
      req.session.user = user;
      res.redirect('/profile');
    }
  });
});

/* deleting user */
router.delete('/delete', async (req, res) => {
  try {
    const user = await User.findOne({ email: res.locals.user.email });
    user.avatar = 'defult.jpeg';
    await user.save();
    res.session.user = user;
    res.status(200).end();
  } catch {
    res.status(500).end();
  }
});

module.exports = router;
