// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along 
// the longest path from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented 
// in their level order traversal, each group of 
// children is separated by the null value (See examples).

// bfs solution
var maxDepth = function(root) {
    if(!root) return 0;
    
    let queue = [];
    let depthCount = 0;
    queue.push(root);
    
    while (queue.length > 0){
        let len = queue.length;
        
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            queue.push(...node.children);
        }
        depthCount++;
    }
    return depthCount;
};

// recursive solution
var maxDepth = function(root) {
    if(!root) return 0;
    
    let max = 0;
    
    for (let child of root.children) {
       max = Math.max(max, maxDepth(child));
    }
    
    return max + 1;
};
