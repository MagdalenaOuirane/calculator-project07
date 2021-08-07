const calculate = require('./src/calculate.js')


test('Add 2 numbers using the add method', () => {
  expect(calculate("13 + 5")).toBe(18)
});

test('Subtract 2 numbers using the subtract method', () => {
  expect(calculate("13 - 5")).toBe(8)
});

test('Multiply 2 numbers using the multiply method', () => {
  expect(calculate("13 * 5")).toBe(65)
});

test('Divide 2 numbers using the divide method', () => {
  expect(calculate("13 / 5")).toBe(2.6)
})

test('Throwing an error when given wrong operation for 2 numbers', () => {
  expect(() => {
    calculate("10 % 10")}).toThrow();
})


test('Adding 3 numbers', () => {
  expect(calculate("3 + 3 + 3")).toBe(9)
})

// testing adding two dots in jsdom



