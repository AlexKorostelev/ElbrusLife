const GameList = require('../models/gameList.js');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/elbruslife', { autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true });

const gamers = [{
        gameName: "Киккер",
        idUserVinner: { _id: '5f99b0c79d9e60240ede9845' },
        idUser2: { _id: '5f99b0c79d9e60240ede9846' },
        gameRank: "3:0",
    },
    {
        gameName: "Настольный теннис",
        idUserVinner: { _id: '5f99b0c79d9e60240ede9847' },
        idUser2: { _id: '5f99b0c79d9e60240ede9846' },
        gameRank: "3:0",
    },
    {
        gameName: "Киккер",
        idUserVinner: { _id: '5f99b0c79d9e60240ede9845' },
        idUser2: { _id: '5f99b0c79d9e60240ede9846' },
        gameRank: "3:0",
    },
    {
        gameName: "Настольный теннис",
        idUserVinner: { _id: '5f99b0c79d9e60240ede9847' },
        idUser2: { _id: '5f99b0c79d9e60240ede9846' },
        gameRank: "3:0",
    },
];

GameList.insertMany(gamers).then(() => {
    mongoose.connection.close();
});