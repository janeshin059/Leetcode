/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
 var maxDepth = function(root) {
  if(!root) return 0;
  let queue = [];
  let depth = 0;

  queue.push(root);
  while(queue.length > 0){
      let leng = queue.length;
      for(let i = 0; i<leng;i++){
      let current = queue.shift();
      if(current.children) current.children.forEach(each => queue.push(each))
      }
      depth++;
  }
  return depth;
};

/////////

var maxDepth2 = function(root) {
  if(!root) return 0;
  let max = 0;

  for(let child of root.children){
      max = Math.max(max, maxDepth2(child))
  }
  return max+1;
};