// Given an array A of non-negative integers, 
// return an array consisting of all the even 
// elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

var sortArrayByParity = function(A) {
    const result = [];
    
    for (let num of A) {
        if (num % 2 === 0) {
            result.unshift(num)
        } else result.push(num);
    }
    
    return result;
};