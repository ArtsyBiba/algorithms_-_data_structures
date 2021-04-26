// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

var maximum69Number  = function(num) {
    for (let i = 0; i < num.toString().length; i++) {
        let cur = num.toString();
        if (cur[i] === '6') {
            return cur.slice(0, i) + '9' + cur.slice(i + 1);
        }
    }
    
    return num;
};