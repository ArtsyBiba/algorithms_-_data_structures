// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, 
// each group of children is separated by the null value (See examples).

// iterative solution
var levelOrder = function(root) {
    if (!root) return [];
    const arr = [root];
    const result = [];
    
    while (arr.length) {
        const size = arr.length;
        const level = [];
        
        for (let i = 0; i < size; i++) {
            const node = arr.shift();
            
            for (const child of node.children) {
                arr.push(child);
            }
            level.push(node.val);
        }
        result.push(level);
    }
    
    return result;
};

// recursive solution
var levelOrder = function(root) {
    const result = [];
    if (root) {
      traverseLevel(root, 0);
    }
    
    return result;
    
    function traverseLevel(node, depth) {
      if (node) {
        if (!result[depth]) { 
          result[depth] = [];
        }
        result[depth].push(node.val);
      }
      
      depth++;
      
      for (const child of node.children) {
        traverseLevel(child, depth);
      }
    }
  };