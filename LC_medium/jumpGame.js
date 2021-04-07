// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

var jump = function(nums) {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        newMax = Math.max(newMax, i + nums[i]);
        if (i === oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    
    return jump;
};