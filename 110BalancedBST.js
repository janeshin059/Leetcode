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
 * @return {boolean}
 */
 var isBalanced = function(root) {
  
  const callDFS = (node) => {
      if(!node) return true;
      const left = callDFS(node.left); //height
      const right = callDFS(node.right);//height
      if(!left || !right || Math.abs(left - right) > 1) return false;
      return Math.max(left,right) + 1; //Math.max in here returns which one has longer height
  }
  return callDFS(root);
};
//optimization

var isBalanced = function(root) {
  let balanced = true;
  const callDFS = (node) => {
      if(!node) return true;
      if(balanced == false) return; //optimization: early exit
      const left = callDFS(node.left); //height
      const right = callDFS(node.right);//height
      if(!left || !right || Math.abs(left - right) > 1) balanced = false;
      return Math.max(left,right) + 1; //Math.max in here returns which one has longer height
  }
  callDFS(root);
  return balanced
};


