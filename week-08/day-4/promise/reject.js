'use strict'

let promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});

// function onReject(error) {
//   console.log(error.message);
// }
// promise.then(null, onReject);

promise.then(null, (error) => {console.log(error.message)}); //Viktor solution