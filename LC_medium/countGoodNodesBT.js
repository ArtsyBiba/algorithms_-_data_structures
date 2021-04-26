// Given a binary tree root, a node X in the tree is named 
// good if in the path from root to X there are no nodes with 
// a value greater than X.

// Return the number of good nodes in the binary tree.

var goodNodes = function(root) {
    let count = 0;
    
    const traverse = function(node, max) {
        if (!node) return;
        if (node.val >= max) {
            count++;
            max = node.val;
        }
        traverse(node.left, max);
        traverse(node.right, max);
    }
    
    traverse(root, root.val);
    
    return count;
};