// Given a non-empty array of integers nums, every 
// element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a 
// linear runtime complexity and without using extra memory?

// initial solution
var singleNumber = function(nums) {
    const map = {};
    
    for (const num of nums) {
        if (map[num]) {
            map[num]++;
        } else map[num] = 1;
    }
    
    for (const key in map) {
        if (map[key] === 1) return key;
    }
};