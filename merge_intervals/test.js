const merge = require('./index');

test('has cycle is a function', () => {
  expect(typeof merge).toEqual('function');
});

test('returns an array of the non-overlapping intervals that cover all the intervals in the input', () => {
  expect(merge([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
});

test('returns an array of the non-overlapping intervals that cover all the intervals in the input', () => {
  expect(merge([[1,4],[4,5]])).toEqual([[1,5]]);
});
