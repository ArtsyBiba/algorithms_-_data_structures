// Return any binary tree that matches the given preorder and postorder traversals.

// Values in the traversals pre and post are distinct positive integers.

var constructFromPrePost = function(pre, post) {
    const history = {};
    const postIndexes = {};
    const head = new TreeNode(pre[0]);
    history[pre[0]] = head;
    
    for (let k = 0; k < post.length; k++) {
        postIndexes[post[k]] = k;
    }

    for (let i = 0; i < pre.length; i++) {
        const currentNode = history[pre[i]];
        
        const leftVal = pre[i + 1];
        if (leftVal && !history[leftVal]) {
            const leftNode = new TreeNode(leftVal);
            currentNode.left = leftNode;
            history[leftVal] = leftNode;
        }
        
        const rightVal = post[postIndexes[pre[i]] - 1];
        if (rightVal && !history[rightVal]) {
            const rightNode = new TreeNode(rightVal);
            currentNode.right = rightNode;
            history[rightVal] = rightNode;
        }
    }
    
    return head; 
};