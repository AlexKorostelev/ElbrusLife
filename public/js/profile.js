/* preventing wrong file ext and size on front end*/
const editBtn = window.document.querySelector('#editBtn');
editBtn.addEventListener('click', (event) => {
  const img = document.querySelector('#avatar');

  // expression for allowed extenstions
  const filetypes = /jpeg|jpg|png|gif/;
  // checking ext
  let extname;
  const fileExt = img.files[0]?.type.split('/')[1];
  if (fileExt) { extname = filetypes.test(fileExt.toLowerCase()) }

  // cheking size limit
  const fileSize = img.files[0]?.size < 1000000; // if file size is less than 1 MB
  if (img.files[0]) { // if there is a file - exec the checking
    console.log('checking');
    console.log(extname, 'extName');
    console.log(fileSize, 'Size');
    if (!(extname && fileSize)) {
      event.preventDefault();
      document.querySelector('#errMsg').innerText = 'wrong extention or image size limit (1 MB) exceeded';
    }
  }
});

const deleteBtn = window.document.querySelector('#deleteBtn');
deleteBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const result = await fetch('/profile/delete', {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
  });
  console.log(result.status);
  if (result.status === 200) {
    window.document.querySelector('#avatarImg').src = '/uploads/defult.jpeg';
  }
});
