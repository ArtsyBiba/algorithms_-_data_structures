// You are given a string s, a split is called good if 
// you can split s into 2 non-empty strings p and q where 
// its concatenation is equal to s and the number of distinct 
// letters in p and q are the same.

// Return the number of good splits you can make in s.

// brute force solutiong
var numSplits = function(s) {
    let count = 0;
    
    for (let i = 1; i < s.length; i++) {
        const left = createMap(s.slice(0, i));
        const right = createMap(s.slice(i));

        if (Object.keys(left).length === Object.keys(right).length) count++;
    }
    
    return count;
};

const createMap = function(sub) {
    const map = {};
    
    for (const char of sub) {
        if (map[char]) {
            map[char]++;
        } else map[char] = 1;
    }
    
    return map;
}

// optimized solution
var numSplits = function(s) {
    let count = 0;
    const left = {};
    const right = createMap(s);
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        left[char] = 1;
        if (right[char] === 1) {
            delete right[char];
        } else right[char]--;

        if (Object.keys(left).length === Object.keys(right).length) count++;
    }
    
    return count;
};

const createMap = function(sub) {
    const map = {};
    
    for (const char of sub) {
        if (map[char]) {
            map[char]++;
        } else map[char] = 1;
    }
    
    return map;
}