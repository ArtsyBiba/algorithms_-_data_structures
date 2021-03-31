// Given an array of distinct integers arr, find all pairs 
// of elements with the minimum absolute difference of any two elements. 

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

var minimumAbsDifference = function(arr) {
    let result = [];
    let minNum = Number.MAX_SAFE_INTEGER;
    
	arr.sort((a, b) => a - b);
    
	for (let i = 0; i < arr.length - 1; i++) {
		let diff = arr[i + 1] - arr[i];
        
		if (diff < minNum) {
			result = [[arr[i], arr[i + 1]]];
			minNum = diff;
		} else if (diff === minNum) {
			result.push([arr[i], arr[i + 1]]);
		}
	}
    
	return result
};