'use strict'

//const form = document.querySelector('form');
const message = document.querySelector('.message');
const API_URL = 'http://localhost:8080/api/links';
const button = document.querySelector('button');

button.addEventListener('click', () => {
  let url = document.querySelector('#url');
  let alias = document.querySelector('#alias');
  if (alias.validity.valid && url.validity.valid) {
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      url: url.value,
      alias: alias.value
    }),
    mode: 'cors'
  })
  .then(response => response.json())
  .then(responseData => message.innerHTML = `Your URL is aliased to <strong>${responseData[0].alias}</strong> and your secret code is <strong>${responseData[0].secretCode}</strong>.`)
  .then(responseData => url.value = null)
  .then(responseData => alias.value = null)
  .catch(error => message.innerHTML = `<font color = "red"> Your alias is already in use!</font>`);
 } else {
   message.innerHTML = `<font color = "red"> Please fill the form correctly!</font>`;
 }
});