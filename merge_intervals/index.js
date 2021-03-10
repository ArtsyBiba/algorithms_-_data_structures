// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, and return an array of the non-overlapping 
// intervals that cover all the intervals in the input.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// solution #1
const merge = function (intervals) {
    if (!intervals.length) return intervals;
  
    intervals.sort((a, b) => a[0] - b[0]);
    
    let prev = intervals[0];
    const res = [prev];
    
    for (let curr of intervals) {
        if (curr[0] <= prev[1]) {
          prev[1] = Math.max(prev[1], curr[1]);
        } else {
          res.push(curr);
          prev = curr;
        }
    }

    return res;
}

module.exports = merge;