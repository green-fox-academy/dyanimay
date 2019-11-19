'use strict'

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

let asteroids = document.querySelector('ul');
//remove element li
let asteroidToRemove = document.querySelector('li');
asteroids.removeChild(asteroidToRemove);

//adding only the asteroids
let asteroidData = [];
planetData.forEach(e => {
  e.asteroid == true ? asteroidData.push(e) : undefined;
});

asteroidData.forEach(element => {
  let item = document.createElement('li');
  item.textContent = asteroidData[asteroidData.indexOf(element)].content;
  item.setAttribute('class', asteroidData[asteroidData.indexOf(element)].category);
  asteroids.appendChild(item);
});

console.log(asteroids);