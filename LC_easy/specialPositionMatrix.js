// Given a rows x cols matrix mat, where mat[i][j] is either 
// 0 or 1, return the number of special positions in mat.

// A position (i,j) is called special if mat[i][j] == 1 and 
// all other elements in row i and column j are 0 (rows and columns are 0-indexed).

var numSpecial = function(mat) {
    let rowsSum = new Array(mat.length).fill(0);
    let columnsSum = new Array(mat[0].length).fill(0);
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                rowsSum[i]++;
                columnsSum[j]++;
            }
        }
    }

    let result = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1 && columnsSum[j] === 1 && rowsSum[i] === 1) {
                result++;
            }
        }
    }
    
    return result;
};