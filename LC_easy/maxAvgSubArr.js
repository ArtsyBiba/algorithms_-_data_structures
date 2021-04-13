// Given an array consisting of n integers, find the 
// contiguous subarray of given length k that has the 
// maximum average value. And you need to output the 
// maximum average value.

// brute force solution
var findMaxAverage = function(nums, k) {
    if (nums.length === 1) return nums[0];
    let max = 0;
    
    for (let i = 0; i <= nums.length - k; i++) {
        const chunk = nums.slice(i, i + k);
        const chunkAvg = chunk.reduce((a,c) => a + c) / k;
        if (chunkAvg > max) max = chunkAvg;
    }
    
    return max;
};

// slightly optimized
var findMaxAverage = function(nums, k) {
    if (nums.length === 1) return nums[0];
    let max = null;
    
    for (let i = 0; i <= nums.length - k; i++) {
        let counter = k - 1;
        let sum = nums[i];
        while (counter > 0) {
            sum += nums[i + counter];
            counter--;
        }
        
        const avg = sum / k;
        if (!max) max = avg
        if (avg > max) max = avg;
    }
    
    return max;
};