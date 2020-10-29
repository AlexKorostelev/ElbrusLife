/* eslint-disable no-console */
document.getElementById('bnAddUser').addEventListener('click', async () => {
  const name = document.getElementById('orangeForm-name').value;
  const email = document.getElementById('orangeForm-email').value;
  const pass = document.getElementById('orangeForm-pass').value;

  const result = await fetch('/registration ', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, email, pass }),
  });
  const msg = await result.text();
  if (msg === 'Пользователь с таким email уже зарегистрирован!') document.getElementById('errRegistration').innerHTML = msg;
  else if (result.status === 200) window.location = '/';

/*   document.getElementById('errRegistration').innerHTML = msg;
  console.log('ФЕЧ POST на /registration ОТПРАВЛЕН!'); */
});

document.getElementById('bnLogin').addEventListener('click', async (e) => {
  const email = document.getElementById('defaultForm-email').value;
  const pass = document.getElementById('defaultForm-pass').value;
  // console.log('/login CLICK!');
  const result = await fetch('/login ', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ email, pass }),
  });
  const msg = await result.text();

  if (msg === 'Неверный пароль!') document.getElementById('errLogin').innerHTML = msg;
  else if (result.status === 200) window.location = '/';
  // console.log('ФЕЧ POST на /login ОТПРАВЛЕН!');
});
