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

// optimized solution
var kthSmallest = function(root, k) {
    const stack = [];
    let count = 0;
    let node = root;
    
    while (true){
        if (node){
            stack.push(node);
            node = node.left;
        } else {
            if (stack.length === 0) break;
            node = stack.pop();
            count += 1;
            if (count === k) return node.val;
            node = node.right;
        }
    }
};