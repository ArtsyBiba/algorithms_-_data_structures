// Given an array of positive integers nums, return the maximum 
// possible sum of an ascending subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.

// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if 
// for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.

var maxAscendingSum = function(nums) {
    let currSum = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currSum += nums[i];
            if (currSum > maxSum) maxSum = currSum;
        } else currSum = nums[i];
    }
    
    return maxSum;
};