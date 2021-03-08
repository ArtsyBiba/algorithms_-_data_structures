// Given a string s and an integer k.

// Return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are (a, e, i, o, u).

// Input: s = "abciiidef", k = 3
// Output: 3

// initial solution
// const vowels = (s, k) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let max = 0;
    
//     for (let i = 0; i < s.length - k + 1; i++) {
//         const substring = s.slice(i, i + k);
//         let count = 0;
        
//         for (let letter of substring) {
//             if (vowels.includes(letter)) {
//                 count++;
//             }
//         }
        
//         if (count > max) {
//             max = count;
//         }
//     }
    
//     return max;
// }

// optimized solution
const vowels = (s, k) => {
    let max = 0;
    let vowelCount = 0;
    let vowels = new Set('aeiou');
    
    s.slice(0, k).split('').forEach(letter => {
        if (vowels.has(letter)) {
            vowelCount += 1;
        }
    })
    
    max = vowelCount;
    
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) vowelCount += 1
        if (vowels.has(s[i - k])) vowelCount -= 1
        if (vowelCount > max) max = vowelCount
    }
    
    return max;
}

module.exports = vowels;
