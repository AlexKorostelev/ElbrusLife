/* eslint-disable no-console */
document.getElementById('bnAddUser').addEventListener('click', async () => {
  const name = document.getElementById('orangeForm-name').value;
  const email = document.getElementById('orangeForm-email').value;
  const password = document.getElementById('orangeForm-pass').value;

  const result = await fetch('/registration ', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  const msg = await result.text();
  if (msg === 'Пользователь с таким email уже зарегистрирован!' ||
    msg === 'Все поля должны быть заполнены!' ||
    msg === 'Некорректный email!')
    document.getElementById('errRegistration').innerHTML = msg;
  else if (result.status === 200) window.location = '/';

  /*   document.getElementById('errRegistration').innerHTML = msg;
    console.log('ФЕЧ POST на /registration ОТПРАВЛЕН!'); */
});

document.getElementById('bnLogin').addEventListener('click', async () => {
  const email = document.getElementById('defaultForm-email').value;
  const password = document.getElementById('defaultForm-pass').value;
  console.log('/login CLICK!', email, password);
  const result = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  // console.log('ФЕЧ POST на /login ОТПРАВЛЕН, ЖДЁМ!');
  const msg = await result.text();

  console.log(typeof (result.status), result.status);

  if (msg === 'ok') window.location = '/';
  else document.getElementById('errLogin').innerHTML = msg;
  // else if (result.status === 200)
  // console.log('ФЕЧ POST на /login ОТПРАВЛЕН!');
});
