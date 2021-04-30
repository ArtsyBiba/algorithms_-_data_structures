// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

// iterative solution
var isUnivalTree = function(root) {
    let arr = [root];
    const val = root.val;
    
    while (arr.length) {
        let node = arr.shift();
        if (node.val !== val) return false;
        if (node.left) arr.unshift(node.left);
        if (node.right) arr.unshift(node.right);
    }
    
    return true;
};

// recursive solution
var isUnivalTree = function(root, value = root.val) {
    if (!root) return true;

    if (root.val !== value) return false;

    return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
};