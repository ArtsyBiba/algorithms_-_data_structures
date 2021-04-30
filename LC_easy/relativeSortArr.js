// Given two arrays arr1 and arr2, the elements of arr2 
// are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering 
// of items in arr1 are the same as in arr2.  Elements that 
// don't appear in arr2 should be placed at the end of arr1 in ascending order.

var relativeSortArray = function(arr1, arr2) {
    const map = {};
    
    for (let num of arr1) {
        if (map[num]) {
            map[num]++;
        } else map[num] = 1;
    }
 
    const result = [];
    
    for (let num of arr2) {
        let count = map[num];
        while (count > 0) {
            result.push(num);
            count--;
        }
        delete map[num];
    }
    
    for (let key in map) {
        let count = map[key];
        while (count > 0) {
            result.push(key);
            count--;
        }
    }
    
    return result;
};