// A happy string is a string that:

// consists only of letters of the set ['a', 'b', 'c'].
// s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
// For example, strings "abc", "ac", "b" and "abcbabcbcb" 
// are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

// Given two integers n and k, consider a list of all happy 
// strings of length n sorted in lexicographical order.

// Return the kth string of this list or return an empty 
// string if there are less than k happy strings of length n.

const getHappyString = function(n, k) {
    const strings = [];
    
    formArray(strings, ['a','b','c'], "", 3,  n);
    strings.sort();
    
    if (strings.length < k) return '';
    
    return strings[k - 1];
};

const formArray = function(strings, s, pre, l, n){
    if (n === 0) { 
        strings.push(pre);
        return; 
    } 
    
    for (let i = 0; i < l; i++) { 
        let newPre; 
          
        if (pre[pre.length - 1] !== s[i]) { 
            newPre = pre + s[i];
            formArray(strings, s, newPre, l, n - 1); 
        }
        
    } 
}