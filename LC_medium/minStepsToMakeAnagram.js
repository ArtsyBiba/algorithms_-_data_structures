// Given two equal-size strings s and t. In one step you can 
// choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same 
// characters with a different (or the same) ordering.

var minSteps = function(s, t) {
    const mapS = createMap(s);
    const mapT = createMap(t);
    let result = 0;

    for (let key in mapS) {
        if (!mapT[key]) {
            result += mapS[key];
        } else if (mapT[key] < mapS[key]) {
            result += mapS[key] - mapT[key];
        }
    }
    
    return result;
};

const createMap = (str) => {
    const map = {};

    for (let char of str) {
        if (map[char]) {
            map[char]++;
        } else map[char] = 1;
    }

    return map;
}