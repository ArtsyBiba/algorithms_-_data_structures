// Given an array of integers preorder, which represents the 
// preorder traversal of a BST (i.e., binary search tree), 
// construct the tree and return its root.

// It is guaranteed that there is always possible to find a 
// binary search tree with the given requirements for the given test cases.

// A binary search tree is a binary tree where for every node, 
// any descendant of Node.left has a value strictly less than Node.val, 
// and any descendant of Node.right has a value strictly greater than Node.val.

// A preorder traversal of a binary tree displays the value of the node first, 
// then traverses Node.left, then traverses Node.right.

// initial solution
var bstFromPreorder = function(preorder) {
    let head = new TreeNode(preorder[0]);
    
    for (let i = 1; i < preorder.length; i++) {
        let curr = head;
        
        while (true) {
            if (preorder[i] > curr.val) {
                if (curr.right) { 
                    curr = curr.right; 
                } else { 
                    curr.right = new TreeNode(preorder[i]); 
                    break; 
                }
            } else {
                if (curr.left) { 
                    curr = curr.left; 
                } else { 
                    curr.left = new TreeNode(preorder[i]); 
                    break; 
                }
            }
        } 
    } 
    
    return head; 
};