const { add } = require('../math');

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});
