const checkInclusion = require('./index');

test('checkInclusion function is defined', () => {
  expect(typeof checkInclusion).toEqual('function');
});

test('check inclusion', () => {
  expect(checkInclusion('ab', 'eidbaooo')).toEqual(true);
});

test('check inclusion', () => {
  expect(checkInclusion('ab', 'eidboaoo')).toEqual(false);
});

