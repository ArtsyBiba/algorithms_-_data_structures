// We are given two sentences A and B.  (A sentence is a string 
// of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one 
// of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

var uncommonFromSentences = function(A, B) {
    const map = {};
    const splitA = A.split(' ');
    const splitB = B.split(' ');
    
    for (let word of splitA) {
        if (map[word]) {
            map[word]++;
        } else map[word] = 1;
    }
    
    for (let word of splitB) {
        if (map[word]) {
            map[word]++;
        } else map[word] = 1;
    }
    
    const result = [];
    for (let key in map) {
        if (map[key] === 1) result.push(key);
    }
    
    return result;
};