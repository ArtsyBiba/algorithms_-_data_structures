// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover 
// the other, some nodes of the two trees are overlapped 
// while the others are not. You need to merge the two 
// trees into a new binary tree. The merge rule is that 
// if two nodes overlap, then sum node values up as the 
// new value of the merged node. Otherwise, the NOT 
// null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

// recursive solution
var mergeTrees = function(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;
    
    root1.val = root1.val + root2.val;
    
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    
    return root1;
};

// iterative solution
var mergeTrees = function(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;
    
    const stack = [];
    stack.push([root1, root2]);
    
    while (stack.length > 0) {
        const pair = stack.pop();
        
        if (!pair[0] || !pair[1]) continue;
        
        pair[0].val += pair[1].val;
        
        if (!pair[0].left)
            pair[0].left = pair[1].left;
        else
            stack.push([pair[0].left, pair[1].left]);
        
        if (!pair[0].right)
            pair[0].right = pair[1].right;
        else
            stack.push([pair[0].right, pair[1].right]);
    }
    
    return root1;
}