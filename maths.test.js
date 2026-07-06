import { sum, subtract, multiply, divide } from './app.js';

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('subtract', () => {
  test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });
});

describe('multiply', () => {
  test('multiplies 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });
});

describe('divide', () => {
  test('divides 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2);
  });
});