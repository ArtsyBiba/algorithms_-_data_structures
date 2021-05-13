// Given an array of integers arr, a lucky integer is an 
// integer which has a frequency in the array equal to its value.

// Return a lucky integer in the array. If there are multiple 
// lucky integers return the largest of them. If there is no lucky integer return -1.

var findLucky = function(arr) {
    const map = {};
    
    for (const num of arr) {
        if (map[num]) {
            map[num]++;
        } else map[num] = 1;
    }
    
    let lucky = -1;
    
    for (const key in map) {
        if (Number(key) === map[key]) {
            if (map[key] > lucky) {
                lucky = map[key];
            }
        }
    }
    
    return lucky;
};