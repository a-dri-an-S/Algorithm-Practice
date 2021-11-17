// You are given two binary trees root1 and root2.
// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
// Return the merged tree.
// Note: The merging process must start from the root nodes of both trees.

const mergeTrees = function(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;
    
    root1.val += root2.val;
    
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    
    return root1;
};

// 1. If root1 is falsey (equal to null) return root2;
// 2. If root2 is falsey (equal to null) return root1;
// 3. Set root1.val equal to sum of root1.val and root2.val
// 4. Use recursion to set value of the left node (root1.left)
//  - Pass arguments root1.left and root2.left to perform mergeTrees function
// 5. Use recursion to set value of the right node (root1.right)
//  - Pass arguments root1.right and root2.right to perform mergeTrees function
// 6. Return root1
