// Given an n x n matrix where each of 
// the rows and columns are sorted in 
// ascending order, return the kth smallest 
// element in the matrix.

// Note that it is the kth smallest element 
// in the sorted order, not the kth distinct element.

// brute force solution
var kthSmallest = function(matrix, k) {
    const arr = [];
    
    for (let row of matrix) {
        for (let num of row) {
            arr.push(num);
        }
    }
    
    arr.sort((a, b) => a - b);
    
    return arr[k - 1]
};