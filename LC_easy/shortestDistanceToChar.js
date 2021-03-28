// Given a string s and a character c that occurs in s, 
// return an array of integers answer where answer.length 
// == s.length and answer[i] is the distance from index i 
// to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), 
// where abs is the absolute value function.

var shortestToChar = function(s, c) {
    var shortestToChar = function(s, c) {
        let arr = [];
        
        for (let i = 0; i < s.length; i++) {
            let closest = findClosest(i, s, c); 
            
            arr.push(closest);
        }
        
        return arr
    };
    
    var findClosest = function(i, s, c) {
        if (s[i] === c) return 0
        
        let j = 1;
        while (i >= 0 || i <= s.length) {
            if (s[i + j] === c || s[i - j] === c) {
                return j;
            }
            j++;
        }
    }
};