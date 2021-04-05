// Given an array A of integers, return the number of 
// (contiguous, non-empty) subarrays that have a sum divisible by K.

var subarraysDivByK = function(A, K) {
    let map = {}; 
    let sum = 0;
    
    for (let i = 0; i < A.length; i++) { 
      sum += A[i];
      const key = ((sum % K) + K) % K;
      map[key] = map[key] + 1 || 1; 
    } 
    
    let result = 0;
    for (let i = 0; i < K; i++) {
        if (map[i] > 1) {
            result += (map[i] * (map[i] - 1)) / 2;
		}
	}
    
    return result + (map[0] || 0);
};