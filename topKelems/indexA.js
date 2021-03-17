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

module.exports = topKFrequent;