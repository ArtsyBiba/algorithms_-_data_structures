// Given a positive integer num, output its complement number. 
// The complement strategy is to flip the bits of its binary representation.

var findComplement = function(num) {
    const bin = num.toString(2);
    
    let reverse = '';
    
    for (const char of bin) {
        if (char === '1') {
            reverse += '0';
        } else reverse += '1';
    }
    
    return parseInt(reverse, 2);  
};