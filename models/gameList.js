const mongoose = require('mongoose');

const GameListSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true,
    },
    idUserVinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    idUser2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    gameRank: {
        type: String,
        required: true,
    },
    gameDate: Date,
});

module.exports = mongoose.model('GameList', GameListSchema);