// Given the root node of a binary search tree, return 
// the sum of values of all nodes with a value in the range [low, high].

var rangeSumBST = function(root, low, high) {
    let sum = 0;
    const arr = [root];
    
    while(arr.length) {
        const node = arr.shift();
        if(node.val >= low && node.val <= high) sum += node.val;
        if(node.left) arr.push(node.left);
        if(node.right) arr.push(node.right);
    }
    
    return sum;
};