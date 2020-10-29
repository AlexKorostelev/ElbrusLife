// const newGame = document.getElementById("createNewGameForm");


// // const opponentNameSelect = document.getElementById("opponentNameSelect")

// newGame.addEventListener('submit', async(e) => {
//     e.preventDefault();
//     const res = await fetch('/leaderboard', {
//         method: 'POST',
//         body: JSON.stringify({
//             gameName: newGame['gameName'].value,
//             gameRank: newGame['gameRank'].value,
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//     const data = await res.json();
//     console.log(data);
// });