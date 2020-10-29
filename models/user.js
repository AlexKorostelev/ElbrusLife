const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: "username",
  },
  surname: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    default: "defult.jpeg"
  },
  gender: String,
  birthday: Date,
  status: {
    type: String,
    default: "студент",
  },
  pongrecords: String,
  kickrecords: String,
  pulluprecords: String,
});

module.exports = mongoose.model('User', userSchema);
