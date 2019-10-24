'use strict'

let list = ['apple', 'banana', 'cat', 'dog'];

let placeholderList = document.querySelectorAll('li');

for (let j = 0; j < placeholderList.length; j++){
  placeholderList[j].textContent = list[j];
  console.log('textContent:', list[j]); //only list[j] is needed without .textContent, because it is already a content so we just need each element of the list "list"
}