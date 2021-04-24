// You have a list of words and a pattern, and you want to 
// know which words in words matches the pattern.

// A word matches the pattern if there exists a permutation 
// of letters p so that after replacing every letter x in the 
// pattern with p(x), we get the desired word.

// (Recall that a permutation of letters is a bijection from 
//     letters to letters: every letter maps to another letter, 
//     and no two letters map to the same letter.)

// Return a list of the words in words that match the given pattern. 

// You may return the answer in any order.

var findAndReplacePattern = function(words, pattern) {
    const result = [];
    
    for (let word of words) {
        const wMap = {};
        const pMap = {}
        let match = true;
        
        for (let i = 0; i < word.length; i++) {
            if (wMap[word[i]] !== pMap[pattern[i]]) {
                match = false;
                break;
            }
            pMap[pattern[i]] = i;
            wMap[word[i]] = i;
        }
        
        
        if (match) result.push(word);
    }
    
    return result;
};