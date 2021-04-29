// You are given the root of a binary tree with n nodes 
// where each node in the tree has node.val coins and there are n coins total.

// In one move, we may choose two adjacent nodes and move 
// one coin from one node to another. (A move may be from parent to child, or from child to parent.)

// Return the number of moves required to make every node have exactly one coin.

var distributeCoins = function(root) {
    let count = 0;
    
    const dfs = function(node) {
        if (!node) return 0;
        
        let giveOrReceiveFromLeftChild = dfs(node.left);
        let giveOrReceiveFromRightChild = dfs(node.right);
        
        let giveOrReceiveToParent = node.val + giveOrReceiveFromLeftChild + giveOrReceiveFromRightChild - 1;
        
        count += Math.abs(giveOrReceiveToParent);
        
        return giveOrReceiveToParent;
    }
    
    dfs(root);
    
    return count;
};