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

// alternative solution
var findDuplicates = function(nums) {
    let res = [];
    let index = 0;
    
    for (let i = 0; i < nums.length; i++) {
        index = Math.abs(nums[i]) - 1;
        
        if (nums[index] < 0)
            res.push(index + 1);
        else    
            nums[index] *= -1;
    }
    
    return res;
};