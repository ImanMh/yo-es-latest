import { arraySum } from './myCore';

test('must be able to calculate sum of an array', () => {
    expect(arraySum([1, 1, 1])).toBe(3);
});
