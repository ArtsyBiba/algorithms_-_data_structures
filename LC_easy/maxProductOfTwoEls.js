// Given the array of integers nums, you will choose two 
// different indices i and j of that array. Return the maximum 
// value of (nums[i]-1)*(nums[j]-1).

// nested for loop solution
var maxProduct = function(nums) {
    let max = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let cur = (nums[i] - 1) * (nums[j] - 1);
            if (cur > max) max = cur;
        }
    }
    
    return max;
};

// two pointers solution
var maxProduct = function(nums) {
    let max = 0;
    let start = 0;
    let end = nums.length - 1;
    
    while (end > start) {
        max = Math.max(max, (nums[end] - 1) * (nums[start] - 1));
        nums[start] < nums[end] ? start++ : end--;
    }
    
    return max;
};