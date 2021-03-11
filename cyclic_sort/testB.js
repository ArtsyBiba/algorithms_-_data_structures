// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Find the kth positive integer that is missing from this array.

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9

// slow solution
const findKthPositive = function(arr, k) {
    const missing = [];
    let counter = 1;
    let max = arr[arr.length - 1] + k;

    while (counter <= max) {
        if (!arr.includes(counter)) {
            missing.push(counter);
        }
        counter++;
    }
    
    return missing[k - 1];
};