'use strict';

setInterval(function(){
  let request = new XMLHttpRequest();
  request.open('GET', 'http://api.icndb.com/jokes/random', true);
  request.onload = getJoke; 
  request.send();
},10000)


function getJoke(){
  let jokeElement = document.getElementById('joke');
  let response = JSON.parse(request.response);
  let joke = response.value.joke;
  console.log(joke)
  jokeElement.innerText = joke;
}

