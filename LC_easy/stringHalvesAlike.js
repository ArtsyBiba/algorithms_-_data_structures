// You are given a string s of even length. Split this 
// string into two halves of equal lengths, and let a 
// be the first half and b be the second half.

// Two strings are alike if they have the same number of 
// vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). 
// Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

var halvesAreAlike = function(s) {
    const mid = s.length / 2;
    const vowels = 'aeiou';
    let vowelsOne = 0;
    let vowelsTwo = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (i < mid && vowels.includes(s[i].toLowerCase())) vowelsOne++;
        if (i >= mid && vowels.includes(s[i].toLowerCase())) vowelsTwo++;
    }
    
    return vowelsOne === vowelsTwo;
};

// optimized solution
var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let total = 0;
    
    for(let i = 0; i < s.length / 2; i++) {
        if (vowels.includes(s[i])) total++;
        if (vowels.includes(s[s.length-i-1])) total--;
    }
    
    return total === 0;
};