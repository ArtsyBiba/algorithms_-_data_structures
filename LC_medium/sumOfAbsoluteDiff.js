// You are given an integer array nums sorted in non-decreasing order.

// Build and return an integer array result with the same length as 
// nums such that result[i] is equal to the summation of absolute 
// differences between nums[i] and all the other elements in the array.

// In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 
// 0 <= j < nums.length and j != i (0-indexed).

// brute force
var getSumAbsoluteDifferences = function(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        
        for (let j = 0; j < nums.length; j++) {
            sum += Math.abs(nums[i] - nums[j]);
        }
        
        result.push(sum);
    }
    
    return result;
};