const topKFrequent = require('./index');

test('topKFrequent is a function', () => {
  expect(typeof topKFrequent).toEqual('function');
});

test('topKFrequent returns k most frequent elements', () => {
  expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([[1,2]]);
});

test('topKFrequent returns k most frequent elements', () => {
  expect(topKFrequent([1], 1)).toEqual([[1]]);
});