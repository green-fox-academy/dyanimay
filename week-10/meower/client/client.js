'use strict'

console.log('Hello World!')

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:8080/mews';

loadingElement.style.display = 'none';

window.onload = function() {
  listAllMews();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');
  
  const mew = {
    name,
    content
  };
  //console.log(mew);
  form.style.display = 'none';
  loadingElement.style.display = '';
  
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(mew),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(createdMew => {
    console.log(createdMew);
    form.reset();
    loadingElement.style.display = 'none';
    form.style.display = '';
    listAllMews();
  })
});

function listAllMews() {
  const mewsElement = document.querySelector('.mews');
  mewsElement.innerHTML = '';
  fetch(API_URL)
  .then(response => response.json())
  .then(mews => {
      console.log(mews);
      mews.forEach(mew => {
        const div = document.createElement('div');
        
        const header = document.createElement('h3');
        header.textContent = mew.name;
        
        const contents = document.createElement('p');
        contents.textContent = mew.content;

        const btn = document.createElement('button');
        btn.className = 'delete';
        btn.textContent = 'delete post';

        // const date = document.createElement('small');
        // date.textContent = new Date(mew.created);

        div.appendChild(header);
        div.appendChild(contents);
        div.appendChild(btn);
        //div.appendChild(date);

        mewsElement.appendChild(div);
      });
    })
}