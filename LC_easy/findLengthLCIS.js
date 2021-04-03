// Given an unsorted array of integers nums, return 
// the length of the longest continuous increasing 
// subsequence (i.e. subarray). The subsequence must 
// be strictly increasing.

// A continuous increasing subsequence is defined 
// by two indices l and r (l < r) such that it is 
// [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 
// and for each l <= i < r, nums[i] < nums[i + 1].

var findLengthOfLCIS = function(nums) {
    if (!nums || !nums.length) return 0;
    let counter = 1;
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) counter++;
        if (counter > max) max = counter;
        if (nums[i] >= nums[i + 1]) counter = 1;
    }
    
    return max;
};