// Given a string, sort it in decreasing order based on the frequency of characters.

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