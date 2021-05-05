// You are given two lists of closed intervals, firstList and secondList, 
// where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. 
// Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that 
// are either empty or represented as a closed interval. For example, the 
// intersection of [1, 3] and [2, 4] is [2, 3].

var intervalIntersection = function(firstList, secondList) {
    let indexOne = 0;
    let indexTwo = 0;
    const result = [];
    
    while (indexOne < firstList.length && indexTwo < secondList.length) {
        let maxStart = Math.max(firstList[indexOne][0], secondList[indexTwo][0]);
        let minEnd = Math.min(firstList[indexOne][1], secondList[indexTwo][1]);
        
        if (maxStart <= minEnd) result.push([maxStart, minEnd]);
        
        if (firstList[indexOne][1] < secondList[indexTwo][1]) {
            indexOne++;
        } else indexTwo++;
    }
    
    return result; 
};