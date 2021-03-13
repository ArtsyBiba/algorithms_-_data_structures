// Given the root of a binary tree, return 
// the zigzag level order traversal of its 
// nodes' values. (i.e., from left to right, 
// then right to left for the next level and alternate between).

const zigzagLevelOrder = function (root) {
    if (!root) return [];
    
    const arr = [root];
    const result = [];
    let counter = 1;
    
    while (arr.length) {
        const temp = [];
        const size = arr.length;
        
        for (let i = 0; i < size; i++) {
            const node = arr.shift();
            if (counter % 2 !== 0) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }
            if (node.left) arr.push(node.left);
            if (node.right) arr.push(node.right);
        }
        
        result.push(temp);

        counter++;
    }
    
    return result;
}

module.exports = zigzagLevelOrder;