'use strict';
let timer = document.getElementById('display');
let timeleft = 10;
let downloadTimer = setInterval(function() {
  timer.textContent = timeleft;
  if (timeleft <= 0) {
    timer.textContent = 'Bomb exploded. Terrorists win';
    clearInterval(downloadTimer);
  }
  timeleft--;
}, 1000);

function defuser() {
  clearInterval(downloadTimer);
  document.getElementById('display').textContent =
    'Bomb defused. Counter terrorists win';
}

function giveUp() {
  clearInterval(downloadTimer);
  document.getElementById('display').textContent =
    'You have been disconnected. Reconnecting...';
}

function reset() {
  clearInterval(downloadTimer);
  timeleft = 10;
  downloadTimer = setInterval(function() {
    timer.textContent = timeleft;
    if (timeleft <= 0) {
      timer.textContent = 'Bomb exploded. Terrorists win';
      clearInterval(downloadTimer);
    }
    timeleft--;
  }, 1000);
}