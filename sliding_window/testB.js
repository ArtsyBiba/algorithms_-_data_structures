const lengthOfLongestSubstring = require('./indexB');

test('Vowels is a function', () => {
  expect(typeof lengthOfLongestSubstring).toEqual('function');
});

test('returns the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
});

test('returns the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
});

test('returns the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
});

test('returns the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('')).toEqual(0);
});