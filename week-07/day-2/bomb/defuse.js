"use strict";
let timer = document.getElementById('display');
let timeleft = 10;
let downloadTimer = setInterval(function() {
  timer.textContent = timeleft;
  if (timeleft <= 0) {
    timer.textContent = 'Terrorists win';
    clearInterval(downloadTimer);
  }
  timeleft--;
}, 1000);

// let btn = document.querySelector('item1');

// btn.addEventListener('click', function(e) {
//   console.log('the button')
// })
