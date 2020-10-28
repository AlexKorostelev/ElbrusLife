const newGame = document.getElementById("createNewGameForm");

const vinnerName = document.getElementById("vinnerName").innerText() //?????????

const opponentNameSelect = document.getElementById("opponentNameSelect")

newGame.addEventListener('submit', async(e) => {
    e.preventDefault();
    const res = await fetch('/leaderboard', {
        method: 'POST',
        body: JSON.stringify({
            gameName: newGame['gameName'].value,
            idUserVinner: vinnerName.value,
            idUser2: opponentNameSelect.options[opponentNameSelect.selectedIndex].value,
            gameRank: newGame['gameRank'].value,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    console.log(data);
});