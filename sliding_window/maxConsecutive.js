// Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

// Return the length of the longest (contiguous) subarray that contains only 1s. 

var longestOnes = function(A, K) {
    let longest = 0;
    let zeroCount = 0;
    let start = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) zeroCount++;

        if (zeroCount > K) {
            if (A[start] === 0) zeroCount--;
            start++;
        }
        
        longest = Math.max(longest, i - start + 1);
    }
    
    return longest;
};