// A sentence is a list of words that are separated by a single 
// space with no leading or trailing spaces. Each of the words 
// consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" 
// are all sentences.

// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate 
// s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

// using JS helpers
var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ');
};

// alternative solution
var truncateSentence = function(s, k) {
    let result = '';
    let counter = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            counter++;
            if (counter === k) return result;
            result += s[i];
        } else {
            result += s[i];
        }
    }
    
    return result;
};