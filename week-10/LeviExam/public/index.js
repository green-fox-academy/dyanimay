'use strict'

function listRecentQuestions() {
  fetch('http://localhost:8080/api/questions?limit=5')
  .then(response => response.json())
  .then(responseData => {
    console.log(responseData[0]);
    responseData.forEach(questionLine => {
      const questionList = document.querySelector('.questionList');

      const aQuestion = document.createElement('a');
      aQuestion.setAttribute('href', `http://localhost:8080/api/questions/${questionLine.question_id}`);
      aQuestion.textContent = `${questionLine.question_content}`;
      const li = document.createElement('li');

      li.appendChild(aQuestion);
      questionList.appendChild(li);
    })
  })
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  const questionInput = document.querySelector('#questionInput');
  event.preventDefault();
  fetch('/api/questions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({question: questionInput.value})
  })
  .then(() => window.location = '/')
});

listRecentQuestions()

// const btnAsk = document.querySelector('.button');
// btnAsk.addEventListener('click', (e) => {
//   e.preventDefault();
//   fetch('http://localhost:8080/api/questions', {
//     method: 'POST',
//     body: JSON.stringify({
//       question
//     }),
//     headers: {
//       'content-type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(responsData => {
//     console.log(responsData);
//     listRecentQuestions();

//   })
// })
