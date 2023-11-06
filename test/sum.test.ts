import sum from '../src/sum';

test('sums two number', () => {
    expect(sum(4,7)).toBe(11);
});