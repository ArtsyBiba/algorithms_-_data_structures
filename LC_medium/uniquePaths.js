// A robot is located at the top-left corner 
// of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point 
// in time. The robot is trying to reach the bottom-right corner 
// of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

var uniquePaths = function(m, n) {
    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;
    
    const dp = Array(m).fill(Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    return dp[m - 1][n - 1];
};