// Given the root of an n-ary tree, 
// return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented 
// in their level order traversal. Each group 
// of children is separated by the null value (See examples)

var preorder = function(root) {
    const arr = [root];
    const result = [];
    
    while (arr.length) {
        let node = arr.shift();
        if (!node) continue;
        result.push(node.val);
        arr.unshift(...node.children);
    }
    
    return result;
};