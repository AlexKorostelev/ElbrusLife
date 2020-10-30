const express = require('express');
const User = require('../models/user');
const GameList = require('../models/gameList');

const router = express.Router();

/* GET users listing. */
router.get('/', async(req, res) => {
    const userName = res.locals.user;
		const usersInListSelect = await User.find();
		const arrUsersFilter = usersInListSelect.filter(e=>e.name!=userName.name);
		//Для таблицы
    const gameListForTableKikker = await GameList.find({ gameName: "Киккер" }).populate('idUserVinner').populate('idUser2');
    const gameListForTennis = await GameList.find({ gameName: "Настольный теннис" }).populate('idUserVinner').populate('idUser2');
		// console.log(gameListForTableKikker);
		//для удаления игры
		const allGame = await GameList.find().populate('idUserVinner').populate('idUser2');
const filterGame = allGame.filter(e=> e.name =userName.name);
		res.render('leaderboard', { userName, arrUsersFilter, gameListForTableKikker, gameListForTennis, filterGame });
});

router.post('/', async(req, res) => {
		const { fioOpponent, gameName, gameRank } = req.body
		const userVinnerId = res.locals.user._id;
		
    const newGame = new GameList({
        gameName: gameName,
        idUserVinner: userVinnerId,
        idUser2: fioOpponent,
        gameRank: gameRank,
    });
		await newGame.save()
    res.redirect("/leaderboard")
});

//
router.delete('/delete', async(req, res) => {
	const {gameId} = req.body
	// console.log('DELETE', gameId);
await GameList.findOneAndDelete(gameId)
return res.redirect("/leaderboard")
});


module.exports = router;
