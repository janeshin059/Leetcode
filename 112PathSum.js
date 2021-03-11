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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
  
  return sumPath(root, 0, targetSum);
   
};

var sumPath = function(curr, sum, targetSum){
        if(!curr) return false;
        sum += curr.val;
         if(!curr.left && !curr.right){
           return sum == targetSum;
        }
        return sumPath(curr.left, sum, targetSum) || sumPath(curr.right, sum, targetSum)
    }

/////
var hasPathSum2 = function(root, sum) {
  if(!root) return false;
  if(!root.left && !root.right) {
    return sum == root.val;
  }else {
    return hasPathSum2(root.left, sum - root.val) || hasPathSum2(root.right, sum-root.val)
  }
}