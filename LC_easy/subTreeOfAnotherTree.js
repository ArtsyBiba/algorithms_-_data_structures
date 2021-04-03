// Given two non-empty binary trees s and t, 
// check whether tree t has exactly the same 
// structure and node values with a subtree of s. 
// A subtree of s is a tree consists of a node in 
// s and all of this node's descendants. 
// The tree s could also be considered as a subtree of itself.

var isSubtree = function(s, t) {
    const isSameTree = (t1, t2) => {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        if (t1.val !== t2.val) return false;
        
        return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
    }
    
    const helper = (t1, t2) => {
        if (!t1) return false;
 
        if (isSameTree(t1, t2)) return true;
        
        return helper(t1.left, t2) || helper(t1.right, t2);
    }
    
    return helper(s, t)
};