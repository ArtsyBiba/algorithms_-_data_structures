// Given an array of unique integers salary where salary[i] is the salary of the employee i.

// Return the average salary of employees excluding the minimum and maximum salary.

var average = function(salary) {
    let min = salary[0];
    let max = salary[0];
    let sum = 0;
    
    for (const num of salary) {
        sum += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }
    
    return (sum - (min + max)) / (salary.length - 2)
};