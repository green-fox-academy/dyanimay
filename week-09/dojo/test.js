'use strict';

let test = require('tape');
let index = require('./index');

console.log(index);

test('value is in the list', function(t) {
  let actual = index([0,1,2,3,4], 2);
  let expected = 2;

  t.equal(actual, expected, 'value is in the list');
  t.end();
});