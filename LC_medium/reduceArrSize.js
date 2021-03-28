// Given an array arr.  You can choose a set of integers 
// and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half 
// of the integers of the array are removed.

// brute force solution
var minSetSize = function(arr) {
    let map = {};
    let min = 0;
    let sum = 0;
    let index = 0;
    
    for (let num of arr) {
        if (map[num]) {
            map[num]++;
        } else map[num] = 1;
    }
    
    const pairs = [];
    
    for (let key in map) {
        pairs.push([Number(key), map[key]]);
    }
    
    pairs.sort((a,b) => b[1] - a[1]);
    
    while (sum < Math.floor(arr.length / 2)) {
        sum += pairs[index][1];
        index++;
        min++;
    }
    
    return min;
};

var minSetSize = function(arr) {
    const map = {};
    
    for (let num of arr) {
        if (map[num]) {
            map[num]++;
        } else map[num] = 1;
    }
    
    const frequency = [];
    
    for (let key in map) {
        frequency.push(map[key]);
    }
    
    frequency.sort((a,b) => b - a);
    
    let step = 0;
    let sum = 0;
    
    for (const val of frequency) {
        sum += val;
        step++;
        if (sum >= Math.floor(arr.length / 2)) return step;
    }
};