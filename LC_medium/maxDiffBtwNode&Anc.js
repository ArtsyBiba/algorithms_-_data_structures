// Given the root of a binary tree, find the maximum 
// value V for which there exist different nodes A and 
// B where V = |A.val - B.val| and A is an ancestor of B.

// A node A is an ancestor of B if either: any child of 
// A is equal to B, or any child of A is an ancestor of B.

var maxAncestorDiff = function(root) {
    if (!root) return 0;
    
    let result = 0;
    helper(root, root.val, root.val);
    
    function helper(root, max, min) {
        if (!root) {
            result = Math.max(result, max - min);
            return;
        }
        
        max = Math.max(max, root.val);
        min = Math.min(min, root.val);
        
        helper(root.left, max, min);
        helper(root.right, max, min);
    }

    return result;
};