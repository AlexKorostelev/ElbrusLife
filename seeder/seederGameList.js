const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ElbrusLife', { useNewUrlParser: true, useUnifiedTopology: true });

const GameList = require('../models/gameList.js');

const GameList = [{
        gameName: "Киккер",
        idUserVinner: [{ _id: '5f6ca27f6b92624d947f0361' }],
        idUser2: [{ _id: '5f6ca27f6b92624d947f0361' }],
        gameRank: "3:0"
    },
    {
        gameName: "Настольный теннис",
        idUserVinner: [{ _id: '5f6ca27f6b92624d947f0361' }],
        idUser2: [{ _id: '5f6ca27f6b92624d947f0361' }],
        gameRank: "3:0"
    },
];

GameList.insertMany(GameList).then(() => {
    mongoose.connection.close();
});
