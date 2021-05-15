// Given a string s, the power of the string is the maximum 
// length of a non-empty substring that contains only one unique character.

// Return the power of the string.

var maxPower = function(s) {
    let curr = 1;
    let max = 1;
    
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            curr++;
            if (curr > max) max = curr;
        } else curr = 1;
    }
    
    return max;
};