'use strict'

let numberOfItems = document.getElementsByTagName('li');
let resultText = document.getElementsByTagName('p'); //elementS többes szám tehát array

const button = document.querySelector('button');
const result = () => {
  resultText[0].textContent = numberOfItems.length;
};
button.addEventListener('click', result);

// let result = document.getElementByClassName('result');
// result.innerText(lengthOfList);