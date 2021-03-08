const vowels = require('./indexA');

test('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

test('returns the maximum number of vowel letters', () => {
    expect(vowels('abciiidef', 3)).toEqual(3);
});

test('returns the maximum number of vowel letters', () => {
    expect(vowels('aeiou', 2)).toEqual(2);
});

test('returns the maximum number of vowel letters', () => {
    expect(vowels('leetcode', 3)).toEqual(2);
});

test('returns the maximum number of vowel letters', () => {
    expect(vowels('rhythms', 4)).toEqual(0);
});

test('returns the maximum number of vowel letters', () => {
    expect(vowels('tryhard', 4)).toEqual(1);
});