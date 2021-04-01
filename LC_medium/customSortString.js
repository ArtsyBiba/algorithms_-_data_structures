// S and T are strings composed of lowercase letters. 
// In S, no letter occurs more than once.

// S was sorted in some custom order previously. 
// We want to permute the characters of T so that they 
// match the order that S was sorted. More specifically, 
// if x occurs before y in S, then x should occur before y in the returned string.

// Return any permutation of T (as a string) that satisfies this property.

var customSortString = function(S, T) {
    const map = {};
    let result = '';
    
    for (let char of T) {
        if (map[char]) {
            map[char]++;
        } else map[char] = 1;
    }
    
    for (let char of S) {
        if (map[char]) {
            while (map[char] > 0) {
                result = result + char;
                map[char]--;
            }
        }
    }
    
    for (let key in map) {
        if (map[key] > 0) {
            while (map[key] > 0) {
                result = result + key;
                map[key]--;
            }
        }
    }
        
    return result;
};