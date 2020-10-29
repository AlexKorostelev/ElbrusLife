const sel_phase = document.getElementById('as');
const sel_week = document.getElementById('asd');
const sel_day = document.getElementById('ass');
const dd = document.getElementById('ds');
let intervalid

document.addEventListener('click', async (e) => {
  if (e.target.id === 'as' || e.target.id === 'asd' || e.target.id === 'ass') {
    e.preventDefault();
    if (intervalid) {
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', intervalid);
      clearInterval(intervalid);
    }
    const result = await fetch('/schedules', {
      method: 'POST',
      body: JSON.stringify({
        phase: sel_phase.value,
        week: sel_week.value,
        day: sel_day.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await result.json();
    intervalid = setInterval(async () => {
      const dfs = Date.now();
      let tmp = new Intl.DateTimeFormat('ru-RU', { hour: "2-digit", minute: "2-digit" });
      let tmpp = new Intl.DateTimeFormat('ru-RU', { second: "2-digit" });
      let times = tmpp.format(new Date(dfs));
      let newtims = tmp.format(new Date(dfs))
      console.log(+times);

      for (let i = 0; i < response.length; i++) {
        if (newtims === response[i].timeLesson) {
          const aa = document.getElementById(String(i));
          console.log(aa);
          aa.classList.toggle("ok")
        }
      }


    }, 1000
    );

    dd.innerText = "";

    for (let i = 0; i < response.length; i++) {
      const aa = document.createElement('div');
      aa.id = '' + i

      aa.innerText = response[i].timeLesson + ' ' + response[i].nameLesson;
      dd.append(aa);
    }
  }
});
