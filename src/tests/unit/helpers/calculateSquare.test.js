import { calculateSquare } from '@/helpers/calculateSquare';

describe('calculateSquare function', () => {
  test('positive number', () => {
    const result = calculateSquare(5);
    expect(result).toBe(25);
  });

  test('negative number', () => {
    const result = calculateSquare(-3);
    expect(result).toBe(9);
  });

  test('zero', () => {
    const result = calculateSquare(0);
    expect(result).toBe(0);
  });

  test('floating-point number', () => {
    const result = calculateSquare(2.5);
    expect(result).toBe(6.25);
  });
});
