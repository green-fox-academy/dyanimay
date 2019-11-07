'use strict'

let joke = document.getElementById('container');
let btn = document.getElementsByTagName('button')[0];

const URL = 'http://api.icndb.com/jokes/random';


btn.addEventListener('click', () => {
  fetch(URL)
    .then(response => response.json()) //visszakapjuk a választ amit beJSONösítünk (lásd feladat linkjehttp://api.icndb.com/jokes/random)
    .then(myJson => joke.innerText = myJson.value.joke) //és ebből az APIból látjuk hogy van "value" és azon belül "joke" így a válaszunk(JSON) value/joke-ja kell
    .catch((err) => {
      console.dir(err);
  })
});

// EZ LENNE EGY JÓ JIBAKEZELÉS
// fetch(URL)
//   .then(response => {
//     if (!response.ok){
//       throw new Error('HTTP error, status = ' + response.status);
//     }
//     return response.json()});