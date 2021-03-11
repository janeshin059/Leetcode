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
 var maxDepth = function(root) {
  if(root == null) return 0;
  let queue = [];
  let depth = 0;
  queue.push(root)
  while(queue.length > 0){
     let numOfNodes = queue.length;
      for(let i = 0; i<numOfNodes;i++){
           let current = queue.shift();
          
          if(current.left) queue.push(current.left);
          if(current.right) queue.push(current.right);
        
      }
        depth++;
  }
  return depth;
};