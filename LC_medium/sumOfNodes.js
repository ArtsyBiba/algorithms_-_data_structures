// Given a binary tree, return the sum of values of nodes 
// with even-valued grandparent.  (A grandparent of a node 
//     is the parent of its parent, if it exists.)

// If there are no nodes with an even-valued grandparent, return 0.

var sumEvenGrandparent = function(root) {
    if (!root) return 0;
    let sum = 0;
    const left = root.left;
    const right = root.right;
    
    if (root.val % 2 === 0) {
        sum += left?.left?.val || 0;
        sum += left?.right?.val || 0;
        sum += right?.left?.val || 0;
        sum += right?.right?.val || 0;
    };
        
    sum += left && sumEvenGrandparent(left);
    sum += right && sumEvenGrandparent(right);
        
    return sum;
};