const express = require('express');
const User = require('../models/user');
const GameList = require('../models/gameList');

const router = express.Router();

/* GET users listing. */
router.get('/', async(req, res) => {
    const userName = res.locals.user;
    const usersInListSelect = await User.find({ name: userName });
    const gameListForTableKikker = await GameList.find({ gameName: "Киккер" }).populate('idUserVinner').populate('idUser2');
    const gameListForTennis = await GameList.find({ gameName: "Настольный теннис" }).populate('idUserVinner').populate('idUser2');
    res.render('leaderboard', { userName, usersInListSelect, gameListForTableKikker, gameListForTennis });
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
