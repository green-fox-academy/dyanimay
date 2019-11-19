'use strict'

let paragraphs = document.querySelectorAll('p');

paragraphs[3].getAttribute('class') == 'dolphin' ? paragraphs[0].innerText = 'pear' : undefined;

paragraphs[0].getAttribute('class') == 'apple' ? paragraphs[2].innerText = 'dog' : undefined;

paragraphs[0].setAttribute('class', 'red'); //paragraphs[0].getAttribute('class') + ' red' -- így amár meglévő class mögé rakja hogy red, tehát megmarad a korábbi class is

paragraphs[1].style['border-radius'] = '40%';