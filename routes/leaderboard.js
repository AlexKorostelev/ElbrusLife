const express = require('express');
const User = require('../models/user');
const db = require('../db/db');
const GameList = require('../models/gameList');

// const GameList = require('../models/gameList');
const router = express.Router();

/* GET users listing. */
router.get('/', async(req, res) => {
    //Переделать чтоб выводится юзер именно который аутентифицирован
    const user = await User.findOne();
    //!!!111111111111111111!!!!!!!!!!!!!!!!1
    const usersInListSelect = await User.find();
    const gameListForTableKikker = await GameList.find({ gameName: "Киккер" }).populate('idUserVinner').populate('idUser2');
    const gameListForTennis = await GameList.find({ gameName: "Настольный теннис" }).populate('idUserVinner').populate('idUser2');
    res.render('leaderboard', { user, usersInListSelect, gameListForTableKikker, gameListForTennis });
});

router.post('/', async(req, res) => {
    const { fioVinner, fioOpponent, gameName, gameRank } = req.body
    console.log(req.body);
    const newGame = new GameList({
        gameName: gameName,
        idUserVinner: fioVinner,
        idUser2: fioOpponent,
        gameRank: gameRank,
    });
    await newGame.save()
    res.redirect("/leaderboard")
});


module.exports = router;