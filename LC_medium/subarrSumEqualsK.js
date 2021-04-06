// Given an array of integers nums and an integer k, 
// return the total number of continuous subarrays 
// whose sum equals to k.

// brute force solution
var subarraySum = function(nums, k) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            console.log(sum)
            if (sum === k) {
                count++;
            }
        }
    }
    
    return count;
};

// optimized solution
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    const map = {};
    map[0] = 1;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map[sum - k]) count += map[sum - k];
        if (map[sum]) {
            map[sum]++;
        } else map[sum] = 1;
    }
    
    return count;
};