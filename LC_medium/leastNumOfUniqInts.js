// Given an array of integers arr and an integer k. 
// Find the least number of unique integers after removing exactly k elements.

// brute force solution
var findLeastNumOfUniqueInts = function(arr, k) {
    const map = {};
    
    for (let num of arr) {
        if (map[num]) {
            map[num]++;
        } else map[num] = 1;
    }
    
    const freq = [];
    for (let key in map) {
        freq.push(map[key]);
    }
    
    freq.sort((a,b) => a - b);
    console.log(freq)
    
    while (k >= freq[0]) {
        const val = freq.shift();
        k -= val;
    }
    
    return freq.length
};