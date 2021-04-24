// In an infinite binary tree where every node has two children, 
// the nodes are labelled in row order.

// In the odd numbered rows (ie., the first, third, fifth,...), 
// the labelling is left to right, while in the even numbered rows 
// (second, fourth, sixth,...), the labelling is right to left.

// Given the label of a node in this tree, return the labels in the 
// path from the root of the tree to the node with that label.

var pathInZigZagTree = function(label) {
    const n = Math.log2(label) | 0;
    const res = [label];
    
    for (let i = n; i > 0; i--) {
        label = (2 ** i * 3 - label - 1) >> 1;
        res.push(label);
    }
    
    return res.reverse();
};