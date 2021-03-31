// Given an array of integers nums, sort the array in 
// increasing order based on the frequency of the values. 
// If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

var frequencySort = function(nums) {
    const map = {};
    
    for (let num of nums) {
        if (map[num]) {
            map[num]++;
        } else map[num] = 1;
    }
    
    return nums.sort((a,b) => map[a] - map[b] || b - a);
};