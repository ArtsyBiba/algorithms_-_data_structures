// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function(s, t) {
    const mapOne = createCharMap(s);
    const mapTwo = createCharMap(t);
    
    if (Object.keys(mapOne).length !== Object.keys(mapTwo).length) return false;
    
    for (let key in mapOne) {
        if (mapOne[key] !== mapTwo[key]) {
            return false;
        }
    }
    
    return true;
};

var createCharMap = function(word) {
    const map = {};
    
    for (let char of word) {
        if (map[char]) {
            map[char]++;
        } else map[char] = 1;
    }
    
    return map;
}