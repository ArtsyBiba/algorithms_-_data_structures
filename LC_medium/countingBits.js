// Given an integer num, return an array of the number of 1's 
// in the binary representation of every number in the range [0, num].

var countBits = function(num) {
    const result = [0];
    let count = 0;
    
    while (count < num) {
        count++;
        let binary = count.toString(2).split('').reduce((a,c) => Number(a) + Number(c));
        result.push(binary);
    }
    
    return result;
};