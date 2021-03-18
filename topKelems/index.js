// Given an integer array nums and an integer k, 
// return the k most frequent elements. You may 
// return the answer in any order.

// brute force solution
const topKFrequent = function steps(n) {
    const map = {};
    const result = [];
    let max = 0;
    let pointer = null;
    
    for (let num of nums) {
        if (map[num]) {
            map[num] = map[num] + 1;
        } else {
            map[num] = 1;
        }
    }
    
    while (k > 0) {
        for (let key in map) {
            if (map[key] > max) {
                max = map[key];
                pointer = key;
            }
        }

        result.push(Number(pointer));
        map[pointer] = 0;
        max = 0;
        k--;
    }
    
    return result;
}

// optimized solution
const topKFrequent = function steps(n) {
    let map = {};
    
    for (let num of nums) {
        if (map[num]) {
            map[num] = map[num] + 1;
        } else {
            map[num] = 1;
        }
    }
    
    const arr = [];
    
    for (let key in map) {
        arr.push([key, map[key]]);
    }
    
    return arr
        .sort((a, b) => { return b[1] - a[1] }) 
        .map(pair => pair[0])
        .slice(0, k);
}

// further optimized with map
const topKFrequent = function steps(n) {
    let map = new Map();
    
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    
    return [...map]
        .sort((a, b) => { return b[1] - a[1] }) 
        .map(pair => pair[0])
        .slice(0, k);
}

module.exports = topKFrequent;