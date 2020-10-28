const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
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
  avatar: String,
  gender: String,
  birthday: Date,
  status: String,
  pongrecords: String,
  kickrecords: String,
  pulluprecords: String,
});

module.exports = mongoose.model('User', userSchema);
