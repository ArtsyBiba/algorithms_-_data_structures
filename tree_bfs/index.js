// Given the root of a binary tree, return the 
// level order traversal of its nodes' values. 
// (i.e., from left to right, level by level).

const levelOrder = function (root) {
  if (!root) return [];
    
  const stack = [root];
  const result = [];
  
  while (stack.length > 0) {
      const temp = [];
      const size = stack.length
      
      for (let i = 0; i < size; i++) {
          const node = stack.shift();
          temp.push(node.val);
          if (node.left) {
              stack.push(node.left);
          }
          if (node.right) {
              stack.push(node.right);
          }
      }
      
      result.push(temp);
  }
  
  return result;
}

module.exports = levelOrder;