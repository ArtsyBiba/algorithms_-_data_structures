// You are given two strings word1 and word2. Merge the strings 
// by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters 
// onto the end of the merged string.

// Return the merged string.

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"

const mergeAlternately = function (word1, word2) {
    const word1Split = word1.split('');
    const word2Split = word2.split('');
    let newWord = [];
    const longest = Math.max(word1Split.length, word2Split.length)
    
    for (let i = 0; i < longest; i++) {
        newWord.push(word1Split.shift());
        newWord.push(word2Split.shift());
    }
    
    return newWord.join('');
}