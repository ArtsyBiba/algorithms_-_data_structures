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

// alternative solution
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        };
    }
};