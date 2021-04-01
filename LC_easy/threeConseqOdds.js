// Given an integer array arr, return true if there are 
// three consecutive odd numbers in the array. Otherwise, return false.

var threeConsecutiveOdds = function(arr) {
    let counter = 0;
    
    for (let num of arr) {
        if (num % 2 !== 0) {
            counter++;
            if (counter === 3) {
                return true;
            }
        } else counter = 0;
    }
    
    return false;
};