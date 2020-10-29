const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/schedule', { useNewUrlParser: true, useUnifiedTopology: true });



const Schedule = require('../models/schedule');


const schedules = [
  {
    phase: "1",
    week: "1",
    day: 1,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },

  {
    phase: "1",
    week: "1",
    day: 2,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "1",
    day: 3,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "1",
    day: 4,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "1",
    day: 5,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "2",
    day: 1,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "2",
    day: 2,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "2",
    day: 3,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "2",
    day: 4,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "2",
    day: 5,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "3",
    day: 1,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "3",
    day: 2,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "3",
    day: 3,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "3",
    day: 4,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "1",
    week: "3",
    day: 5,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "1",
    day: 1,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "1",
    day: 2,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "1",
    day: 3,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "1",
    day: 4,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "1",
    day: 5,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "2",
    day: 1,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "2",
    day: 2,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "2",
    day: 3,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "2",
    day: 4,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "2",
    day: 5,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "3",
    day: 1,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "3",
    day: 2,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "3",
    day: 3,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "3",
    day: 4,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "3",
    day: 5,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "1",
    day: 1,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "1",
    day: 2,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "1",
    day: 3,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "1",
    day: 4,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "1",
    day: 5,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "2",
    day: 1,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "2",
    day: 2,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "2",
    day: 3,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "2",
    week: "2",
    day: 4,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "2",
    day: 5,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "3",
    day: 1,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "3",
    day: 2,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "3",
    day: 3,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "3",
    day: 4,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  },
  {
    phase: "3",
    week: "3",
    day: 5,
    lesson: [
      {
        nameLesson: "Check in with accountability buddies",
        timeLesson: "8:45"
      },
      {
        nameLesson: "StandUp Meeting",
        timeLesson: "9:00"
      },
      {
        nameLesson: "	LiveCoding/Доклады",
        timeLesson: "9:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "11:00"
      },
      {
        nameLesson: "Йога",
        timeLesson: "12:00"
      },
      {
        nameLesson: "Обед",
        timeLesson: "13:15"
      },
      {
        nameLesson: "Парное программирование",
        timeLesson: "14:00"
      },
      {
        nameLesson: "Приглашенный спикер",
        timeLesson: "19:00"
      }
    ]
  }
];


Schedule.insertMany(schedules).then(() => {
  mongoose.connection.close();
});