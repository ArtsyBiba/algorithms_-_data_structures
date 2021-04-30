// Given a binary tree where node values are digits from 1 
// to 9. A path in the binary tree is said to be pseudo-palindromic 
// if at least one permutation of the node values in the path is a palindrome.

// Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var pseudoPalindromicPaths  = function(root) {
    let count = 0;
    const stack = [{ node: root, pathMap: new Array(10).fill(0) }];

    while (stack.length > 0) {
        const { node, pathMap } = stack.pop();
        if (node) {
            const newPathMap = [...pathMap];
            newPathMap[node.val]++;

            if (!node.left && !node.right) {
                if (checkPalindromic(newPathMap)) count++;
            } else {
                    stack.push({ node: node.right, pathMap: newPathMap });
                    stack.push({ node: node.left, pathMap: newPathMap });
            }
        }
    }

    return count;
};

const checkPalindromic = (pathMap) => {
    let oddNum = 0;

    for (let i = 1; i <= 9; i++) {
        if (pathMap[i] % 2 === 1) {
            oddNum++;
            if (oddNum > 1) return false;
        }
    }

    return true;
};