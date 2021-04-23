// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:

// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

// initial solution
var numTeams = function(rating) {
    let count = 0;
    
    for (let i = 0; i < rating.length - 2; i++) {
        const first = rating[i];
        
        for (let j = i + 1; j < rating.length; j++) {
            const second = rating[j];
            
            if (first > second) {
                count += rating.slice(j + 1).filter(item => item < second).length;
            } else {
                count += rating.slice(j + 1).filter(item => item > second).length;
            }  
        }
    }
    
    return count;
};

// optimized solution
var numTeams = function(rating) {
    let count = 0;
    
    for (let i = 0; i < rating.length - 2; i++) {
        for (let j = i + 1; j < rating.length - 1; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if ((rating[i] < rating[j] && rating[j] < rating[k]) || (rating[i] > rating[j] && rating[j] > rating[k])) {
                    count++;
                }
            }
        }
    }
    
    return count;
};