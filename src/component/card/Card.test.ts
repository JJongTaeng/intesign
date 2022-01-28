import '@testing-library/jest-dom'
import Card from './Card';
function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  let card = new Card();
  card.setBody('Hello');

  expect(sum(1, 2)).toBe(3);
});