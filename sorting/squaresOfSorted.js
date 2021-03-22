// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

// brute force solution
var sortedSquares = function(nums) {
    const squared = nums.map(num => num * num);
    
    return squared.sort((a, b) => a - b);
};