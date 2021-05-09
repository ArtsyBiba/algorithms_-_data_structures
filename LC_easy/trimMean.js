// Given an integer array arr, return the mean of the remaining integers 
// after removing the smallest 5% and the largest 5% of the elements.

// Answers within 10-5 of the actual answer will be considered accepted

var trimMean = function(arr) {
    arr.sort((a,b) => a - b);
    
    let toRemove = Math.floor(arr.length * 0.05);
    while (toRemove) {
        arr.pop();
        arr.shift();
        toRemove--;
    }
    
    const remLength = arr.length;
    const remSum = arr.reduce((a,c) => a + c);
    
    return remSum / remLength;
};