// math.test.js
const { add, multiply } = require('./math');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('adds 3 + 3 to equal 6', () => {
    expect(add(3, 3)).toBe(6);
});

test('adds 4 + 9 to equal 13', () => {
    expect(add(4, 9)).toBe(13);
});

test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});
