// Given an array nums of integers, return 
// how many of them contain an even number of digits.

var findNumbers = function(nums) {
    const filtered  = nums.filter(num => num.toString().length % 2 === 0);
    
    return filtered.length;
};