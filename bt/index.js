// We are given the head node root of a binary tree, 
// where additionally every node's value is either a 0 or a 1.

// Return the same tree where every subtree 
// (of the given tree) not containing a 1 has been removed.

// (Recall that the subtree of a node X is X, 
// plus every node that is a descendant of X.)

// recursive solution
function pruneTree(str) {
    if (!root) return null;
    
    const left = pruneTree(root.left);
    const right = pruneTree(root.right);
    
    if (!left && !right && root.val === 0) {
        return null;
    }
    
    root.left = left;
    root.right = right;
    
    return root;
}

module.exports = pruneTree;
