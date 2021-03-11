const missingNumber = require('./index');

test('missingNumber is a function', () => {
  expect(typeof missingNumber).toEqual('function');
});

test('returns the only number in the range that is missing from the array', () => {
  expect(missingNumber([3,0,1])).toEqual(2);
});

test('returns the only number in the range that is missing from the array', () => {
  expect(missingNumber([0,1])).toEqual(2);
});

test('returns the only number in the range that is missing from the array', () => {
  expect(missingNumber([9,6,4,2,3,5,7,0,1])).toEqual(8);
});

test('returns the only number in the range that is missing from the array', () => {
  expect(missingNumber([0])).toEqual(1);
});

