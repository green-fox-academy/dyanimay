'use strict'

let lines = document.querySelectorAll('p');
/*for (let i = 0; i < lines.length; i++){
  lines[i].textContent = lines[lines.length-1].textContent;
  //console.log('textContent:', lines[i].textContent);
}*/

for (let j = 0; j < lines.length; j++){
  lines[j].innerHTML = lines[lines.length-1].innerHTML;
  //console.log('innerHTML:', lines[j].innerHTML);
}