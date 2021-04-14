// Given the root of a binary tree, return the sum of values of its deepest leaves.

var deepestLeavesSum = function(root) {
    let sum = 0;
    let deepestLevel = 0;

    const traverse = (node, level) => {
        if (!node) return;
        
        if (level === deepestLevel) {
            sum += node.val;    
        } else if (level > deepestLevel) {
            deepestLevel = level;    
            sum = node.val;
        }
        
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    
    traverse(root, 0);
    return sum;
};