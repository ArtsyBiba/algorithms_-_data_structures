// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

var setZeroes = function(matrix) {
    var setZeroes = function(matrix) {
        let firstColHasZero = false;
        let firstRowHasZero = false;
    
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][0] === 0) {
                firstColHasZero = true;
                break;
            }
        }
    
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[0][j] === 0) {
                firstRowHasZero = true;
                break;
            }
        }
    
        for (let i = 1; i < matrix.length; i++) {
            for (let j = 1; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
    
        for (let i = 1; i < matrix.length; i++) {
            for (let j = 1; j < matrix[0].length; j++) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    
        if (firstColHasZero) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][0] = 0;
            }
        }
    
        if (firstRowHasZero) {
            for (let j = 0; j < matrix[0].length; j++) {
                matrix[0][j] = 0;
            }
        }
    };
};