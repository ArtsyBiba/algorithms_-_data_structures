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

// alternative solution
var sortColors = function(nums) {
    let r = 0;
    let w = 0;
    let b = 0;
    let counter = 0;
    
    for (let num of nums) {
        if (num === 0) {
            r++;
        } else if (num === 1) {
            w++;
        } else b++;
    }
    
    while (r > 0) {
        nums[counter] = 0;
        r--;
        counter++;
    }
    while (w > 0) {
        nums[counter] = 1;
        w--;
        counter++;
    }
    while (b > 0) {
        nums[counter] = 2;
        b--;
        counter++;
    }
};