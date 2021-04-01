// Given an array of string words. Return all strings 
// in words which is substring of another word in any order. 

// String words[i] is substring of words[j], 
// if can be obtained removing some characters to left and/or right side of words[j].

var stringMatching = function(words) {
    const result = [];
    
    for (let word of words) {
        if (words.filter(w => w.includes(word)).length > 1) {
            result.push(word);
        }
    }
    
    return result;
};