// Given the root of an n-ary tree, return 
// the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented 
// in their level order traversal. Each group 
// of children is separated by the null value (See examples)

var postorder = function(root) {
    const arr = [root];
    const result = [];
    
    while (arr.length) {
        const node = arr.pop();
        if (!node) continue;
        result.push(node.val);
        arr.push(...node.children);
    }
    
    return result.reverse();
};