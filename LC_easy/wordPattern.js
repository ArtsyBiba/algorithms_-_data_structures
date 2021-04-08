// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between
// a letter in pattern and a non-empty word in s.

// brute force solution
var wordPattern = function(pattern, s) {
    const map = {};
    const split = s.split(" ");
    if (split.length !== pattern.length) return false;
    
    for (let i = 0; i < pattern.length; i++) {
        if (map[pattern[i]] && map[pattern[i]] !== split[i]) return false;
        if (!map[pattern[i]]) {
            if (Object.values(map).includes(split[i])) return false;
            map[pattern[i]] = split[i];
        }
    }
    
    return true;
};

// optimized solution
var wordPattern = function(pattern, s) {
    const split = s.split(" ");
    if (split.length !== pattern.length) return false;
    
    const patMap = {};
    const sMap = {};
    
    for (let i = 0; i < pattern.length; i++) {
        if (patMap[pattern[i]] && patMap[pattern[i]] !== split[i]) return false;
        if (!patMap[pattern[i]]) {
            patMap[pattern[i]] = split[i];
        }
        
        if (sMap[split[i]] && sMap[split[i]] !== pattern[i]) return false;
        if (!sMap[split[i]]) {
            sMap[split[i]] = pattern[i];
        }
    }
    
    return true;
};