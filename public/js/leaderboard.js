
const gameDelete = document.getElementById('myModalDelete');
console.log("FEEEEETCH");
const fetchButton  = document.getElementById("gameFormDelete");
const formDelete  = document.getElementById("gameForDeleteSelect");

gameDelete.addEventListener('click', async () => {
	// e.preventDefault()
		const res = await fetch('/leaderboard/delete', {
    method: 'DELETE',
    body: JSON.stringify({
    gameId: formDelete.options[formDelete.selectedIndex].value
    }),
    headers: {
      'Content-Type': 'application/json',
    },
	});

	const data = await res.json();
	window.location.reload();
  console.log(data);
});
