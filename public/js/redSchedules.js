const sel_red = document.getElementById('red');


sel_red.addEventListener('submit',async(e) => {
  e.preventDefault();
  console.log(sel_red.dataset.red);
      const result = await fetch(`/schedules/${sel_red.dataset.id}/${sel_red.dataset.red}`, {
        method: 'POST',
        body: JSON.stringify({
          timeLesson: e.target.teims.value,
          nameLesson: e.target.textValue.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    );
    
    