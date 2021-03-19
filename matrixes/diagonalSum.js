// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal 
// and all the elements on the secondary diagonal that are not part of the primary diagonal.

// solution #1
var diagonalSum = function(mat) {
    let sum = 0;
    let left = 0;
    let right = mat[0].length - 1;

    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][left];
        mat[i][left] = 0;
        left++;
        
        sum += mat[i][right];
        mat[i][right] = 0;
        right--;
    }
    
    return sum;
};

// alternative solution
var diagonalSum = function(mat) {
    let sum = 0;
    let j = mat[0].length - 1;

    for (let i = 0; i < mat.length; i++, j--) {
        if (i !== j) {
            sum += mat[i][i];
        }
        
        sum += mat[i][j];
    }
    
    return sum;
}