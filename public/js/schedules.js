const sel_phase = document.getElementById('as');
const sel_week = document.getElementById('asd');
const sel_day = document.getElementById('ass');
const mainUnitDiv = document.getElementById('ds');
let intervalid

document.addEventListener('click', async (e) => {
  if (e.target.id === 'as' || e.target.id === 'asd' || e.target.id === 'ass') {
    e.preventDefault();
    if (intervalid) {
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', intervalid);
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
    console.log(response);
    intervalid = setInterval(async () => {
      const newDate = Date.now();
      let tmp = new Intl.DateTimeFormat('ru-RU', { hour: "2-digit", minute: "2-digit" });
      let newTimes = tmp.format(new Date(newDate))
      // console.log(+times);

      for (let i = 0; i < response.lesson.length; i++) {
        if (newTimes === response.lesson[i].timeLesson) {
          const colorDiv = document.getElementById(String(i));
          console.log(colorDiv);
          colorDiv.classList.toggle("ok")
        }
      }


    }, 1000
    );

    mainUnitDiv.innerText = "";

    for (let i = 0; i < response.lesson.length; i++) {
      const add = document.createElement('div');
      add.id = '' + i;
      
      const edit = document.createElement('a');
      edit.text  = "Редактировать"; 
      edit.href  = `/schedules/${response._id}/${i}`;
      edit.id  = '' + i;

      const del = document.createElement('a');
      del.text  = "Удалить"; 
      del.href  = `/schedules/${response._id}/${i}`;
      del.id  = '' + i;
      // console.log(ab);


      add.innerText = response.lesson[i].timeLesson + ' ' + response.lesson[i].nameLesson;
      mainUnitDiv.append(add, edit, del);
    }
  }
});
