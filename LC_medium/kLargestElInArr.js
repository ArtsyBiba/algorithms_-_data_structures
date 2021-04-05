// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

var findKthLargest = function(nums, k) {
    const sorted = nums.sort((a, b) => b - a);
    
    return sorted[k - 1];
};