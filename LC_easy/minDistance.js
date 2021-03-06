// Given an integer array nums (0-indexed) and 
// two integers target and start, find an index 
// i such that nums[i] == target and abs(i - start) 
// is minimized. Note that abs(x) is the absolute value of x.

// Return abs(i - start).

// It is guaranteed that target exists in nums.

var getMinDistance = function(nums, target, start) {
    let i = start;
    let j = start;
    
    while (true) {
        if (nums[i] === target) return i - start;
        if(nums[j] === target) return start - j;
        i++;
        j--;
    }
};