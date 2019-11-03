"use strict";
let timer = document.getElementById("display");
let timeleft = 10;
let downloadTimer = setInterval(function() {
  timer.textContent = timeleft;
  if (timeleft <= 0) {
    timer.textContent = "Bomb exploded. Terrorists win";
    clearInterval(downloadTimer);
  }
  timeleft--;
}, 1000);

function defuser() {
  clearInterval(downloadTimer);
  document.getElementById("display").textContent =
    "Bomb defused. Counter terrorists win";
}

function giveUp() {
  clearInterval(downloadTimer);
  document.getElementById("display").textContent =
    "WHY DID U GIVE UP??! Terrorists win";
}

function reset() {
  clearInterval(downloadTimer);
  timeleft = 10;
  downloadTimer = setInterval(function() {
    timer.textContent = timeleft;
    if (timeleft <= 0) {
      timer.textContent = "Bomb exploded. Terrorists win";
      clearInterval(downloadTimer);
    }
    timeleft--;
  }, 1000);
}

timer
  .mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
      defuser();
    }, 3000);
  })
  .mouseup(function(e) {
    clearTimeout(this.downTimer);
  });
//////
let setint = '';
document.ready(function() {
  let val = 0;
  defuse.on('mousedown', function(e) {
    clearInterval(setint);
    val = 0;
    setint = setInterval(function() {
      ++val;
      console.log("mousehold");
    }, 50);
  });
  defuse.on("mouseleave mouseup", function() {
    val = 0;
    clearInterval(setint);
    reset();
  });
});
