// Given two strings s1 and s2, write a function 
// to return true if s2 contains the permutation 
// of s1. In other words, one of the first string's 
// permutations is the substring of the second string.

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;
    let s1Hash = {};
    let s2Hash = {};
    let match = true;
    
    for (let i = 0; i < s1.length; i++) {
       s1Hash[s1[i]] = (s1Hash[s1[i]]) ? s1Hash[s1[i]] + 1 : 1;
       s2Hash[s2[i]] = (s2Hash[s2[i]]) ? s2Hash[s2[i]] + 1 : 1;
    }
    
    for (let i = 0; i < s2.length - s1.length + 1; i++) {
      for (const key in s1Hash) { 
          if (s2Hash[key] != s1Hash[key]) {
              match = false;
              break;
          }
      }
        
      if (match === true) return true;
      match = true;
	  
      s2Hash[s2[i]] = (s2Hash[s2[i]] === 1) ? undefined : s2Hash[s2[i]] - 1;
      s2Hash[s2[s1.length + i]] = (s2Hash[s2[s1.length + i]]) ? s2Hash[s2[s1.length+i]] + 1: 1;
    }
    
    return false;
}


module.exports = checkInclusion;
