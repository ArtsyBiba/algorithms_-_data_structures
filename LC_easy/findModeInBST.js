// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

// If the tree has more than one mode, return them in any order.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.

// brute force solution
var findMode = function(root) {
    if (!root) return null;
    
    const map = {};
    const arr = [root];
    
    while (arr.length) {
        const node = arr.shift();
        if (map[node.val]) {
            map[node.val]++;
        } else map[node.val] = 1;
        
        if (node.left) arr.push(node.left);
        if (node.right) arr.push(node.right);
    }
    
    let result = [];
    let max = 0;
    for (let key in map) {
        if (map[key] > max) {
            result = [key];
            max = map[key];
        } 
        if (map[key] === max && !result.includes(key)) {
            result.push(key);
        }
    }
    
    return result;
};

// optimized solution
var findMode = function(root) {
    const output = [];
    if (!root) return output;
    const map = {};
    const arr = [root];
    let most = 0;
    
    while (arr.length) {
        const node = arr.shift();
        
        if (map[node.val]) {
            map[node.val]++;
        } else map[node.val] = 1;

        if (map[node.val] > most) most = map[node.val];
        if (node.left) arr.push(node.left);
        if (node.right) arr.push(node.right);
    }
    
    for (let n in map) {
        if (map[n] === most) output.push(n);
    }
    
    return output;
};