'use strict'

let promise = new Promise(function (fulfill, reject) {
  setTimeout (() => {
    fulfill('FULFILLED!');
  },300);
});
// promise.then((response) => {
//   console.log(response);
// });
promise.then(console.log);