'use strict';

const button = document.querySelector('button');
const alertGreenFox = () => {
  alert('Green Fox!');
};
// Try mouseover too
button.addEventListener('click', alertGreenFox);

let startTime = 0;
let secondCounter = 0;
let counterInterval = '';
const measureButton = document.querySelector('#measure');
measureButton.addEventListener('mousedown', function(){
  //first oslution for time measurement
  startTime = event.timeStamp;

  //second solution
  counterInterval = setInterval(() => {
    ++secondCounter;
  }, 1000);
});

measureButton.addEventListener('mouseup', function(){
  //first oslution for time measurement
  console.log('The elapsed time is: ' + (event.timeStamp - startTime));

  //second solution
  clearInterval(counterInterval);
  console.log('The elapsed time is: ' + secondCounter);
  secondCounter = 0;
});