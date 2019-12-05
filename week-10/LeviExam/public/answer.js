'use strict'

const id = window.location.pathname.split('/')[2];
//console.log({id});

fetch(`/api/questions/${id}`)
.then(response => response.json())
.then(responseData => {
  console.log(responseData);
  const h1 = document.querySelector('h1');
  h1.textContent = responseData.question;
  console.log(responseData.answers);
  responseData.answers.forEach(answerLine => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = answerLine.message;
    //console.log(answerLine.message);
    ul.appendChild(li);
  });
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = document.querySelector('.answer').value;
  console.log('lol');
  fetch(`/api/questions/${id}/answers`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ message: answer })
  })
  //.then(response => response.json())
  .then(() => window.location = window.location)
})