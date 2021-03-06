// Given the root of a Binary Search Tree (BST), convert it 
// to a Greater Tree such that every key of the original BST is 
// changed to the original key plus sum of all keys greater than the original key in BST.

// As a reminder, a binary search tree is a tree that satisfies these constraints:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// recursive solution
var bstToGst = function(root) {
    const getSum = (node, sum) => {
        if (!node) return sum;
    
        node.val += getSum(node.right, sum);

        return getSum(node.left, node.val);
    };
    
    getSum(root, 0);

    return root;
};

// iterative solution
var bstToGst = function(root) {
    let cur = root;
    let arr = [];
    let count = 0;
    
    while (true) {
        if (cur !== null) {
            arr.push(cur);
            cur = cur.right;
        } else {
            if (arr.length === 0) break
            cur = arr.pop();
           
            count += cur.val;
            cur.val = count;
            
            cur = cur.left;
        }
    }
    
    return root;
};