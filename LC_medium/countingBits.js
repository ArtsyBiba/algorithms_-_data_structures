// Given an integer num, return an array of the number of 1's 
// in the binary representation of every number in the range [0, num].

// brute force solution
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

// optimized single-pass solution
var countBits = function(num) {
    const result = [];
    
    for (let i = 0; i <= num; i++) {
        if (i === 0){
            result.push(0);
        } else if (i === 1 || i === 2){
            result.push(1);
        } else if (i % 2 === 0){
            result.push(result[Math.floor(i / 2)]);
        } else {
            result.push(result[Math.floor(i / 2)] + 1);
        }                
        
    }
    
    return result;
};