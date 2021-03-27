// Given the root of a binary tree, the level 
// of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum 
// of all the values of nodes at level x is maximal.

var maxLevelSum = function(root) {
    if (!root) return 1;
    
    const queue = [root];
    const levels = [];
    
    while (queue.length) {
        const level = [];
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        levels.push(level.reduce((acc, cur) => acc + cur));
    }
    
    return levels.indexOf(Math.max(...levels)) + 1;
}

