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

const btnAsk = document.querySelector('.button');
btnAsk.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('http://localhost:8080/api/questions', {
    method: 'POST',
    body: JSON.stringify({
      question
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(responsData => {
    console.log(responsData);
    listRecentQuestions();

  })
})

listRecentQuestions()