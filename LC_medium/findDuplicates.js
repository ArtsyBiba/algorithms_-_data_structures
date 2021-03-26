// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), 
// some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

var findDuplicates = function(nums) {
    const map = {};
    
    for (let num of nums) {
        if (map[num]) {
            map[num] = map[num] + 1;
        } else map[num] = 1;
    }
    
    const result = [];
    for (let key in map) {
        if (map[key] > 1) {
            result.push(key);
        }
    }
    
    return result;
};