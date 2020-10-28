/* eslint-disable no-console */
document.getElementById('bnAddUser').addEventListener('click', async () => {
  const name = document.getElementById('orangeForm-name').value;
  const email = document.getElementById('orangeForm-email').value;
  const pass = document.getElementById('orangeForm-pass').value;

  await fetch('/registration ', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, email, pass }),
  });
  console.log('ФЕЧ POST на /registration ОТПРАВЛЕН!');
});
