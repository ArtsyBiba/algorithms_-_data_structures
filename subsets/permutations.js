// Given an array nums of distinct integers, 
// return all the possible permutations. You 
// can return the answer in any order.

var permute = function(nums) {
    if (nums.length === 1) return [[nums[0]]];
    if (!nums.length) return [];
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let numsCopy = [...nums]; 
        numsCopy.splice(i, 1); 
        let rtnVal = permute(numsCopy);
        
        for (let j = 0; j < rtnVal.length; j++) {
            result.push([nums[i], ...rtnVal[j]]);
        }  
    }
    
    return result;
};