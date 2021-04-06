// Given an array of integers nums and an integer k, 
// return the total number of continuous subarrays 
// whose sum equals to k.

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