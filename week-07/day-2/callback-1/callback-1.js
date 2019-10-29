'use strict';

const mapWith = (array, callback) => {
  let output = [];

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  array.forEach(element => {
    output.push(callback(element)) //végigmegy a beírt array elementjein éss a callback function (addOne) végigcisnálja az egyes elementeken majd visszapusholja az output üres arraybe
  });
  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
  let temp = [];

  let letters = word.split(''); //már a letters is egy array amiben az indexek a szó betűi

  letters.forEach(e => {
    if( 
    letters.indexOf(e) % 2 == 0) {
      temp.push(e); //temp-be rakja be azokat az e-ik betűket amik oszthatók kettővel
    }
  })
  return temp.join(''); //a temp array indexeit (amik a betűk) összejoinolja, így lesznek szavak, pl: mp, a mapWith meg végigmegy a words array elemein/szavain
}
console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']