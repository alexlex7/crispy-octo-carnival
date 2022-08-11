import { calculateRating } from '../calculateRating';

test('test calculate rating', () => {
  expect(calculateRating(5)).toBe(0);
  expect(calculateRating(10)).toBe(0.5);
  expect(calculateRating(20)).toBe(0.5);
  expect(calculateRating(40)).toBe(1);
  expect(calculateRating(60)).toBe(1.5);
  expect(calculateRating(80)).toBe(2);
  expect(calculateRating(100)).toBe(2.5);
  expect(calculateRating(120)).toBe(3);
  expect(calculateRating(140)).toBe(3.5);
  expect(calculateRating(160)).toBe(4);
  expect(calculateRating(180)).toBe(4.5);
  expect(calculateRating(200)).toBe(5);
  expect(calculateRating(205)).toBe(5);
});
