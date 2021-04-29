// Given an array A of strings made only from lowercase letters, 
// return a list of all characters that show up in all strings 
// within the list (including duplicates).  For example, if a 
// character occurs 3 times in all strings but not 4 times, you 
// need to include that character three times in the final answer.

// You may return the answer in any order.

var commonChars = function(A) {
    const result = [];
    const firstWord = [...A[0]];
    
    for (const letter of firstWord) {
        if (A.every(word => word.includes(letter))) {
            result.push(letter);
            A = A.map(word => word.replace(letter, ''));
        }
    }
    
    return result;
};