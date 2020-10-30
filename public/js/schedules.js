const sel_phase = document.getElementById('as');
const sel_week = document.getElementById('asd');
const sel_day = document.getElementById('ass');
const dd = document.getElementById('ds');
let intervalid


async function ShowSchedules(e) {
  //{
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
    // console.log(response);
    intervalid = setInterval(async () => {
      const dfs = Date.now();
      let tmp = new Intl.DateTimeFormat('ru-RU', { hour: "2-digit", minute: "2-digit" });
      let tmpp = new Intl.DateTimeFormat('ru-RU', { second: "2-digit" });
      let times = tmpp.format(new Date(dfs));
      let newtims = tmp.format(new Date(dfs))
      // console.log(+times);

      for (let i = 0; i < response.lesson.length; i++) {
        if (newtims === response.lesson[i].timeLesson) {
          const aa = document.getElementById(String(i));
          // console.log(aa);
          aa.classList.toggle("ok")
        }
      }


    }, 1000
    );

    dd.innerText = "";

    for (let i = 0; i < response.lesson.length; i++) {
      const add = document.createElement('div');
      add.id = '' + response.lesson[i]._id;

      const edit = document.createElement('a');
      edit.text = "Редактировать";
      edit.href = `/schedules/${response._id}/${response.lesson[i]._id}`;
      edit.id = '' + response.lesson[i]._id;

      const del = document.createElement('a');
      del.text = "Удалить";
      del.href = `/schedules/${response._id}/${response.lesson[i]._id}`;
      del.id = '' + response.lesson[i]._id;
      // console.log(ab);


      add.innerText = response.lesson[i].timeLesson + ' ' + response.lesson[i].nameLesson;
      dd.append(add, edit, del);
      // dd.append(edit);
      // dd.append(del);
    }
  }
  //  }
}

document.addEventListener('click', async (e) => ShowSchedules(e));
document.addEventListener('DOMContentLoaded', (e) => ShowSchedules(e));