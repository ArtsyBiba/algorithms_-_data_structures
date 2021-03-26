// Given an array of integers nums, 
// half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, 
// i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

var sortArrayByParityII = function(nums) {
    let indexOdd = 1;
    let indexEven = 0;
    const result = [];
    
    for (let num of nums) {
        if (num % 2 === 0) {
            result[indexEven] = num;
            indexEven += 2;
        } else {
            result[indexOdd] = num;
            indexOdd += 2;
        }
    }
    
    return result;
}

var sortArrayByParityII = function(nums) {
    let evenNums = nums.filter((i) => i % 2 === 0);
    let oddNums = nums.filter((i) => i % 2 !== 0);
    
    let res = [];
    for (let i = 0; i < nums.length / 2; i++) {
        res.push(evenNums[i], oddNums[i]);
    }
    
    return res;
};