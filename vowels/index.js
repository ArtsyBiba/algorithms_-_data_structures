// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// iterative solution

function vowels(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}

// regular expression solution

// function vowels(str) {
//     // 'g' - to make sure that the reg. ex. doesn't stop after the first match
//     // 'i' - to make sure that our reg. ex. is case insensitive
//     const matches = str.match(/[aeiou]/gi);

//     // handle the return value of reg. ex.
//     return matches ? matches.length : 0;
// }

module.exports = vowels;
