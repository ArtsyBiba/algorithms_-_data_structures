// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along 
// the longest path from the root node down to the farthest leaf node.

// solution #1
const maxDepth = function (root) {
    if (!root) return 0;
    
    const arr = [root];
    let levels = 0;
    
    while (arr.length) {
        let size = arr.length;
        
        for (let i = 0; i < size; i++) {
            const node = arr.shift();
            if (node.right) arr.push(node.right);
            if (node.left) arr.push(node.left);
        }
        levels++;
    }
    
    return levels;
}

module.exports = maxDepth;