var minDepth = function(root) {
  let depth = 0; //DFS
  function findDepth(root,depth){
      if(root == null) {
          return depth;
      }if(root.left == null){
          return findDepth(root.right, depth +1);
      }if(root.right == null){
          return findDepth(root.left, depth+1);
      }
      return Math.min(findDepth(root.left, depth+1), findDepth(root.right, depth+1));
  }
  return findDepth(root,depth);
};

var minDepth2 = function(root) { //BFS
    if(root == null) return 0;
    let depth = 0;
    let queue = [];
    queue.push(root);
    while(queue.length > 0){
        let numberOfNodes = queue.length;
        for(let i=0; i<numberOfNodes;i++){
            let current = queue.shift();
            if(current.left == null && current.right === null ){
                depth++;
                return depth;
            }
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        depth++;
    }
    return depth;
};

var minDepth3 = function(root) { //BFS
     let queue = [{node: root, level:1}];
     if(root == null) return 0;
     while(queue.length){
         let {node, level} = queue.shift();
         if(!node.left && !node.right) return level;
         if(node.left) queue.push({node: node.left, level: level+1 });
         if(node.right) queue.push({node: node.right, level: level+1})
     } 
    
 };