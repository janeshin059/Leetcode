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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  let res = [];
  function dfs(current, str){
      if(!current) return [];
      str += current.val
      if(current.left || current.right){
       str += "->"
      }
      if(!current.left && !current.right){
          res.push(str);
          console.log(res)
          return;// str =''
      }
      if(current.left) dfs(current.left, str); //끝내는게 아니고 쭉 찾아야 하므로 return없고, 불러줌
      if(current.right)  dfs(current.right, str);
      
  }
  dfs(root,'');
  return res;
};

//Time O(n)
//space O(n)