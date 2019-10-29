'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

setTimeout(() => {
  console.log('pear'); // prints after one second
}, 1000);
console.log('apple'); // prints after one second
setTimeout(() => {
  console.log('melon'); // prints after one second
}, 3000);
setTimeout(() => {
  console.log('grapes'); // prints after one second
}, 5000);