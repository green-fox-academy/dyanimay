import {Apple} from './apples'
import {List} from './sum'
import * as test from 'tape'

test('write apple', t => {
  const apple1 = new Apple();

  var actual = apple1.getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
});

test('sum array', t => {
  const myList: number[] = [1, 2, 3, 4, 5];
  const list1 = new List();

  var actual = list1.summa(myList);
  var expected = 15;

  t.equal(actual, expected);
  t.end();
});