import * as test from 'tape'
import {Apple} from './apples'
import {List} from './sum'
import {Anagram} from './anagram'
import { CountLetter } from './countLetters'
import {fibonacci} from './fibonacci'

test('1. test: write apple', t => {
  const apple1 = new Apple();

  let actual = apple1.getApple();
  let expected = 'apple';

  t.equal(actual, expected, 'should return apple');
  t.end();
});

test('2. test: sum array', t => {
  const myList: number[] = [1, 2, 3, 4, 5];
  const list1 = new List();

  let actual = list1.summa(myList);
  let expected = 15;

  t.equal(actual, expected, 'should return 15');
  t.end();
});

test('2.1 test: sum empty array', t => {
  const myList2: number[] = [];
  const list2 = new List();

  let actual = list2.summa(myList2);
  let expected = 0;

  t.equal(actual, expected, 'should return 0');
  t.end();
});

test('2.2 test: sum 1 element array', t => {
  const myList3: number[] = [1];
  const list3 = new List();

  let actual = list3.summa(myList3);
  let expected = 1;

  t.equal(actual, expected, 'should return 1');
  t.end();
});

test('2.3 test: sum multiple element array', t => {
  const myList4: number[] = [1, 6, 10, 15, 1, 2, 0, 4];
  const list4 = new List();

  let actual = list4.summa(myList4);
  let expected = 39;

  t.equal(actual, expected, 'should return 35');
  t.end();
});

test('3. test: anagram or not', t => {
  const anagram1 = new Anagram();
  const myWord1: string = 'het'; //myWord1=a in anagram.ts
  const myWord2: string = 'the'; //myWord2=b in anagram.ts

  let actual = anagram1.anagram(myWord1, myWord2);
  let expected = true;

  t.equal(actual, expected, 'should return true');
  t.end();
});

test('4. test: dictionary of letters', t => {
  const dictionary = new CountLetter();
  const word = 'greenfox'

  let actual = JSON.stringify(dictionary.counter(word)); //do the counter METHOD (function) for the word 'greenfox'
  let expected = JSON.stringify({ g: 1, r: 1, e: 2, n: 1, f: 1, o: 1, x: 1 }); //JSON.stringify converts anything to a string, so 2 strings will be the same

  t.equal(actual, expected);
  t.end();
});

test('5. test: fibonacci number', t => {
  const n = 5;

  let actual = fibonacci(n);
  let expected = 3;

  t.equal(actual, expected, 'should return 3');
  t.end();
});