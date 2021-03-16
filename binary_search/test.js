const search = require('./index');

test('search function is defined', () => {
  expect(typeof search).toEqual('function');
});

test('when target exists, then return its index', () => {
  expect(fib([-1,0,3,5,9,12], 9)).toEqual(4);
});

test('when target does not exists, then return -1', () => {
  expect(fib([-1,0,3,5,9,12], 2)).toEqual(-1);
});
