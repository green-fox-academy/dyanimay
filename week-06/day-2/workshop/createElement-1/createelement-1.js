'use strict'

let asteroids = document.querySelector('ul');

//Green fox task
let greenFox = document.createElement('li');
greenFox.textContent = 'The Green Fox';

asteroids.appendChild(greenFox);

//Lamplighter
let lampLighter = document.createElement('li');
lampLighter.textContent = 'The Lamplighter';

asteroids.appendChild(lampLighter);

//adding heading
let container = document.getElementsByClassName('container')[0];
let heading = document.createElement('h1');
heading.textContent = 'I can add elements to the DOM!'

container.appendChild(heading);

//adding picture
let picture = document.createElement('img');
picture.src = 'https://www.luvncare.net/wp-content/uploads/2019/04/lnc-rabbit-vet-care.jpg';

container.appendChild(picture);