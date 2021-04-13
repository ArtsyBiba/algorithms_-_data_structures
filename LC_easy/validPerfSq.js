// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

var isPerfectSquare = function(num) {
    if(num === 1) return true;
  
    let add = 3;
    let curr = 1;
    
    while(curr < num) {
        curr += add;
        add += 2;
    }
    
    return curr === num;
};

// binary search solution
var isPerfectSquare = function(num) {
    if (num < 2) return true;
  
    let left = 0;
    let right = num;
    let guessSquared = null;
    
    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        guessSquared = mid * mid;
        
        if (guessSquared === num) return true;

        if (guessSquared > num) {
            right = mid - 1;
        } else left = mid + 1;
    }
    
    return false;
};