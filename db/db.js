const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/elbruslife', { useNewUrlParser: true, useUnifiedTopology: true });