// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

 var countCharacters = function(words, chars) {
    let count = 0;
    const map = createMap(chars);
    
    for (const word of words) {
        let pass = true;
        const wordMap = createMap(word);
        
        for (const char in wordMap) {
            if (!map[char] || wordMap[char] > map[char]) {
                pass = false;
                continue;
            }
        }
        
        if (pass) count += word.length;
    }
    
    return count;
};

const createMap = function(chars) {
    const map = {};
    
    for (const char of chars) {
        if (map[char]) {
            map[char]++;
        } else map[char] = 1;
    }
    
    return map;
}