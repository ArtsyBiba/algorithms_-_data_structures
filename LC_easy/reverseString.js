// Write a function that reverses a string. The input string is given as an array of characters s.

// initial solution
var reverseString = function(s) {
    return s.reverse()
};

// alternative solution
var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    
    return s;
};