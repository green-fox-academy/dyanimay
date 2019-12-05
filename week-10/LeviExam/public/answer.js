'use strict'

const id = window.location.pathname.split('/')[2];
console.log({id});

fetch(`/api/questions/${id}`)
.then(response => response.json())
.then(responseData => {
  const h1 = document.querySelector('h1');
  const ul = document.querySelector('ul');

  const answers = body.answers.map(e)

  h1.innerText = body.question;
})

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const answer = document.querySelector('#answer').value;
  
})