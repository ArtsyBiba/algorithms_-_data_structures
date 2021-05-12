// Given the root of a binary search tree, and an integer k, 
// return the kth (1-indexed) smallest element in the tree.

var kthSmallest = function(root, k) {
    const nums = [];
    const arr = [root];
    
    while (arr.length) {
        let node = arr.shift();
        nums.push(node.val);
        if (node.left) arr.push(node.left);
        if (node.right) arr.push(node.right);
    }
    
    nums.sort((a, b) => a - b);
    return nums[k - 1]; 
};