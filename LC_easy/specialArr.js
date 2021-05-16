// You are given an array nums of non-negative integers. 
// nums is considered special if there exists a number x 
// such that there are exactly x numbers in nums that are greater than or equal to x.

// Notice that x does not have to be an element in nums.

// Return x if the array is special, otherwise, return -1. 
// It can be proven that if nums is special, the value for x is unique.

var specialArray = function(nums) {
    let curr = 1;
    let count = 0;
    
    while (curr <= nums.length) {
        for (const num of nums) {
            if (num >= curr) {
                count++;
            }
        }
        if (count === curr) return curr;
        curr++;
        count = 0;
    }
    
    return -1;
};