const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    phase: Number,
    week: Number,
    day: Number,
    lesson: [{
      nameLesson: String,
      timeLesson: String,
    }]
  });


  
  module.exports = mongoose.model('Schedule', scheduleSchema);