// Given the root of a binary tree and an integer targetSum, 
// return true if the tree has a root-to-leaf path such that 
// adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// recursive solution
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    
    if (!root.left && !root.right) {
        return targetSum === root.val;
    } else {
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    }
};

// iterative solution
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    
    const queue = [root];
    
    while (queue.length > 0) {
        let cur = queue.shift();
        
        if (!cur.left && !cur.right && cur.val == targetSum) return true;

        if (cur.left) {
            cur.left.val += cur.val;
            queue.push(cur.left);
        }
        if (cur.right) {
            cur.right.val += cur.val;
            queue.push(cur.right);
        }
    }
    
    return false;
};