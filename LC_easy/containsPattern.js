// Given an array of positive integers arr,  find a pattern 
// of length m that is repeated k or more times.

// A pattern is a subarray (consecutive sub-sequence) that consists 
// of one or more values, repeated multiple times consecutively without overlapping. 
// A pattern is defined by its length and the number of repetitions.

// Return true if there exists a pattern of length m that is 
// repeated k or more times, otherwise return false.

var containsPattern = function(arr, m, k) {
    let ans = 0;
    
    for(let i = 0; i + m < arr.length; i++) {
        if(arr[i] !== arr[i + m]) ans = 0;  
        if(arr[i] === arr[i + m]) ans++;
        if(ans === (k - 1) * m) return true;
    }
    
    return false; 
};