// Given a binary tree root and an integer target, delete all 
// the leaf nodes with value target.

// Note that once you delete a leaf node with value target, if 
// it's parent node becomes a leaf node and has the value target, 
// it should also be deleted (you need to continue doing that until you can't).

var removeLeafNodes = function(root, target) {
    if (!root) return null;
    
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);
    
    if (!root.left && !root.right) {
        if (root.val === target) {
            return null;
        }
    }
    
    return root;
};