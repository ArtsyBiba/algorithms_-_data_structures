// Given an array of integers nums which is sorted 
// in ascending order, and an integer target, write 
// a function to search target in nums. If target 
// exists, then return its index. Otherwise, return -1.

// brute force solution
var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    
    return -1
}

// binary search solution
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

module.exports = search;
