// Given a m * n matrix of distinct numbers, 
// return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such 
// that it is the minimum element in its row and maximum in its column.

// brute force solution
var luckyNumbers  = function(matrix) {
    const mins = [];
    const maxs = [];
    
    for (let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0];
        
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j];
            let max = matrix[0][j];
                
            for (let k = 0; k < matrix.length; k++) {
                if (matrix[k][j] > max) max = matrix[k][j];
            }
            
            maxs.push(max);
        }
        
        mins.push(min);
    }

    if (matrix.length === 1) return mins;
    
    const result = [];
    
    for (let num of mins) {
        if (maxs.includes(num)) result.push(num);
    }
    
    return result;
};

// improved solution
var luckyNumbers  = function(matrix) {
    const mins = [];
    const maxs = [];
    
    for (let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0];
        
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j];
        }
        
        mins.push(min);
    }
    
    for (let i = 0; i < matrix[0].length; i++) {
        let max = matrix[0][i];
        
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] > max) max = matrix[j][i];
        }
        
        maxs.push(max);
    }

    if (matrix.length === 1) return mins;
    
    const result = [];
    
    for (let num of mins) {
        if (maxs.includes(num)) result.push(num);
    }
    
    return result;
}