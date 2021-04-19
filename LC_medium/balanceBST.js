// Given a binary search tree, return a balanced binary 
// search tree with the same node values.

// A binary search tree is balanced if and only if the 
// depth of the two subtrees of every node never differ by more than 1.

// If there is more than one answer, return any of them.

var balanceBST = function(root) {
    const arr = [];
    const stack = [root];
    
    while (stack.length) {
        let node = stack.shift();
        arr.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    
    arr.sort((a,b) => a - b);
    
    return createBST(arr);
};

const createBST = function(arr) {
    if (!arr.length) return null;
    const mid = Math.floor(arr.length / 2);
    const result = new TreeNode(arr[mid]);
    
    result.left = createBST(arr.slice(0, mid));
    result.right = createBST(arr.slice(mid + 1));
    
    return result;
};