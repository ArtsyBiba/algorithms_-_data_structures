// Given the root of a binary tree, invert the tree, and return its root.

// initial solution
var invertTree = function(root) {
    var stack = [root];
    
    while (stack.length) {
        var node = stack.pop();
        if (!node) continue;
        [node.left, node.right] = [node.right, node.left];
        stack.push(node.left, node.right);
    }
    
    return root;
};

// recursive solution
var invertTree = function(root) {
    if (root) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    }
    return root;
};