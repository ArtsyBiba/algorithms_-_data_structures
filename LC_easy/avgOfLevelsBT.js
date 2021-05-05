// Given the root of a binary tree, return the average value 
// of the nodes on each level in the form of an array. Answers 
// within 10-5 of the actual answer will be accepted.

var averageOfLevels = function(root) {
    const arr = [root, 's'];
    const res = [];
    let sum = 0;
    let count = 0;
    
    while (arr.length > 1) {
        const node = arr.shift();
        if (node === 's') {
            res.push(sum / count);
            sum = 0;
            count = 0;
            arr.push('s')
        } else {
            sum += node.val;
            count++;
            if (node.left) arr.push(node.left);
            if (node.right) arr.push(node.right);
        }
    }
    
    res.push(sum / count);
    sum = 0;
    count = 0;
        
    return res;
};