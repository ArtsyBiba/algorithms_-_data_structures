// Given an integer n, return a list of all possible full binary 
// trees with n nodes. Each node of each tree in the answer must have Node.val == 0.

// Each element of the answer is the root node of one possible tree. 
// You may return the final list of trees in any order.

// A full binary tree is a binary tree where each node has exactly 0 or 2 children.

var allPossibleFBT = function(n) {
    if (n % 2 === 0) return [];
    if (n === 1) return [new TreeNode(0)];
    
    let trees = [];
    
    for (let i = 1; i <= n - 2; i += 2) {
        let leftTrees = allPossibleFBT(i);
        let rightTrees = allPossibleFBT(n - 1 - i);
        
        leftTrees.forEach(lt => {
            rightTrees.forEach(rt => {
                let root = new TreeNode(0);
                root.left = lt;
                root.right = rt;
                trees.push(root);
            });
        });
    }
    
    return trees;
};