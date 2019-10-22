'use strict'

let king = document.getElementById('b325');
console.log('king', king);

let businessLamp = document.getElementsByClassName('big');
console.log('businesslamp', businessLamp);

let conceitedKing = document.querySelectorAll('.container > div');
for (let i = 0; i < conceitedKing.length; i++){
  alert(conceitedKing[i].innerText);
}