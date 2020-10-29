const express = require('express');
const User = require('../models/user');
const db = require('../db/db');

// const GameList = require('../models/gameList');
const router = express.Router();

/* GET users listing. */
router.get('/', async(req, res) => {
    //Переделать чтоб выводится юзер именно который аутентифицирован
    const user = await User.findOne();
    //!!!111111111111111111!!!!!!!!!!!!!!!!1
    const usersInListSelect = await User.find();
    res.render('leaderboard', { user, usersInListSelect });
});

// router.post('/', async(req, res) => {
//     const { gameName, gameRank } = req.body;
//     console.log(req.body);
//     // const newGame = await new GameList({

//     // })
// })


module.exports = router;