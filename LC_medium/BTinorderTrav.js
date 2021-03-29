// Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function(root) {
    const stack = [];
    const result = [];
    
    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }
    
    return result;
};