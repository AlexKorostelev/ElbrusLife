// const newGame = document.getElementById("gameForm");
// console.log(">>>>>>>>>", newGame);

// // const opponentNameSelect = document.getElementById("opponentNameSelect")

// newGame.addEventListener('click', async(e) => {
//     e.preventDefault();
//     let fioVinner = document.getElementById('fioVinner').value;
//     let fioOpponent = document.getElementById('fioOpponent').value;
//     let gameName = document.getElementById('gameName').value;
//     let gameRank = document.getElementById('gameRank').value;

//     console.log(gameRank)
//     const res = await fetch('/leaderboard', {
//         method: 'POST',
//         body: JSON.stringify({
//             fioVinner,
//             fioOpponent,
//             gameName,
//             gameRank,
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//     console.log('>>>>>LLLLLLLLLL');
//     const data = await res.json();
//     console.log(data);
// });