// Given an array nums with n objects colored red
// , white, or blue, sort them in-place so that 
// objects of the same color are adjacent, with 
// the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to 
// represent the color red, white, and blue, respectively.

// brute force solution
var sortColors = function(nums) {
    return nums.sort((a,b) => a - b)
};