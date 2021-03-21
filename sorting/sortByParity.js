// Given an array A of non-negative integers, 
// return an array consisting of all the even 
// elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// solution #1
var sortArrayByParity = function(A) {
    const result = [];
    
    for (let num of A) {
        if (num % 2 === 0) {
            result.unshift(num)
        } else result.push(num);
    }
    
    return result;
};

// solution #2
var sortArrayByParity = function(A) {
    let i = 0;
    let j = A.length -1;
  
    while(i < j) {
      if (A[i] % 2 !== 0 && A[j] % 2 === 0) {
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
      }
  
      if (A[i] % 2 !== 0) {
        j--;
      }
  
      if(A[i] % 2 === 0) {
        i++;
      }
    }
  
    return A;
}