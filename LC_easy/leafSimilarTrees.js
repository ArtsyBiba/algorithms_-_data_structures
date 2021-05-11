// Consider all the leaves of a binary tree, from left to right order, 
// the values of those leaves form a leaf value sequence.

var leafSimilar = function(root1, root2) {
    const arr1 = [];
    const arr2 = [];
    
    checkLeafs(root1, arr1);
    checkLeafs(root2, arr2);
    
    return isSimilar(arr1, arr2)
};

const checkLeafs = function(root, arr) {
    if (!root.left && !root.right) {
        arr.push(root.val);
        return arr;
    }

    if (root.left) checkLeafs(root.left, arr);
    if (root.right) checkLeafs(root.right, arr);
};

const isSimilar = function(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    
    return true;
}