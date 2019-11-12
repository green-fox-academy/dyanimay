'use strict';

let test = require('tape');
let index = require('./index');
let anagram = require('./anagram');
let numberConverter = require('./numberConverter');

//TASK INDEX
test('1.test: value is in the list', function(t) {
  let actual = index([0,1,2,3,4], 2);
  let expected = 2;

  t.equal(actual, expected, 'value is in the list');
  t.end();
});

test('1b. test: value is in the list', function(e) {
  let actual = index([0,1,2,3,4], 5);
  let expected = -1;

  e.equal(actual, expected, 'value is not in the list');
  e.end();
});

//TASK ANAGRAM
test('2. test: strings are the same', t => {
  let actual = JSON.stringify(anagram('desserts', 'stressed'));
  let exptected = JSON.stringify(true);

  t.equal(actual, exptected, '2 strins are the same');
  t.end();
});

test('2b. test: strings are the same', t => {
  let actual = JSON.stringify(anagram('dess erts', 'st ressed'));
  let exptected = JSON.stringify(true);

  t.equal(actual, exptected, '2 strins are the same');
  t.end();
});

//TASK NUMBER CONVERTER 
test('1a. test: number is converted', t => {
  let actual = numberConverter(745);
  let expected = 'seven hundred and fourty five'

  t.equal(actual, expected, 'the number is successfully converted');
  t.end();
});