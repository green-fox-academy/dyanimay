'use strict'

let button = document.querySelector('button');
let div = document.querySelector('div');

button.onclick = () => {
  div.getAttribute('class') != 'party' ? div.setAttribute ('class', 'party') : div.setAttribute('class', '');
}