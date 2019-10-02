export class Apple {
  public getApple(): string{
    return 'apple';
  }
}
import * as test from 'tape';

test('write apple', t => {
  const apple1 = new Apple();

  var actual = apple1.getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
});