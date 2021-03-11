var minDepth = function(root) {
  let depth = 0; //DFS
  function findDepth(root, depth){
    if(root == null) return depth;
    if(!root.left){
      return findDepth(root.right, depth+1);
    }
    if(!root.right){
      return findDepth(root.right, depth+1);
    }
    return Math.min(findDepth(root.left, depth+1), findDepth(root.right, depth+1))
  }
  return findDepth(root,depth);
}