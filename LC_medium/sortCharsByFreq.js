// Given a string, sort it in decreasing order based on the frequency of characters.

// initial solution
var frequencySort = function(s) {
    const map = {};
    
    for (let char of s) {
        if (map[char]) {
            map[char]++;
        } else map[char] = 1;
    }
    
    const arr = [];
    for (let key in map) {
        arr.push([key, map[key]]);
    }
    
    arr.sort((a,b) => b[1] - a[1]);
    
    let result = '';
    for (let pair of arr) {
        let count = pair[1];
        while (count > 0) {
            result += pair[0];
            count--;
        }
    }
    
    return result;
};

// optimized solution
var frequencySort = function(s) {
    const map = {};
    
    for (let char of s) {
        if (map[char]) {
            map[char]++;
        } else map[char] = 1;
    }
    
    const sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);
    
    let result = '';
    for (let i = 0; i < sorted.length; i++) {
        const char = sorted[i];
        result += char.repeat(map[char]);
    }
    
    return result;
};