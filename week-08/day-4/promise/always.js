'use strict'

let promise = new Promise ((fulfill, reject) => {
  fulfill('PROMISE VALUE');
});

promise.then(console.log); //ezzel a then-nel addig vár amig minden más le nem játszódik a programban

console.log('MAIN PROGRAM');