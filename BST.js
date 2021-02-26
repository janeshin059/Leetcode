class Node {
  constructor(data, left=null, right=null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if(node == null){
      this.root = new Node(data);
      return;
    }
    else {
      const searchTree = function(node) {
        if(data < node.data){
          if(node.left === null) {
            node.left = new Node(data);
            return;
          }else if(node.left !== null){
            return searchTree(node.left);
          }
        }else if (data > node.data){
          if(node.right == null){
            node.right = new Node(data);
            return;
          }else if (node.right !== null){
            return searchTree(node.right);
          }
        }else {
          return null;
        }
        }
        return searchTree(node);
    }
  }

//
findMin(){
  let current = this.root;
  while(current.left !== null){
    current = current.left;
  }
  return current.data;
}
//
findMax() {
  let current = this.root;
  while(current.right !== null){
    current = current.right;
  }
  return current.data;
}
//
find(data){
  let current = this.root;
  while (current.data !== data){
    if(data < current.data){
      current = current.left;
    }else {
      current = current.right;
    }
    if(current == null){
      return null;
    }
  }
  return current;
}

isPresent(data){
  let current = this.root;
  while(current){
    if(data === current.data){
      return true;
    }
    else if(data < current.data){
      current = current.left;
    }else current = current.right;
  }
  return false;
}
///////

remove(data){
  const removeNode = function(node, data){
    if(node == null){
      return null;
    }
    if(data == node.data){
      if(node.left == null && node.right == null) return null;
      if(node.left == null) return node.right;
      if(node.right == null) return node.left;
      let tempNode = node.right;
      while(tempNode.left !== null){
        tempNode = tempNode.left;
      }
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
    }else if(data < node.data){
      node.left = removeNode(node.left, data);
      return node;
    }
    else {
      node.right = removeNode(node.right, data);
      return node;
    }
  }
  this.root = removeNode(this.root, data);
}


////
 isBalanced(){
   return (this.findMinHeight() >= this.findMaxHeight() -1);
 }

 findMinHeight(node = this.root){
   if(node == null){
     return -1;
   }
   let left = this.findMinHeight(node.left);
   let right = this.findMinHeight(node.right);
   if(left < right){
     return left +1;
   }
   else {
     return right +1;
   }
 }

 findMaxHeight(node = this.root){
   if(node == null){
     return -1;
   }
   let left = this.findMinHeight(node.left);
   let right = this.findMaxHeight(node.right);
   if(left > right){
     return left +1;
   }
   else return right +1;
 }

 inOrder(){
   if(this.root == null){
     return null;
   }else {
     let result = new Array();
     function traverseInOrder(node){
       node.left && traverseInOrder(node.left);
       result.push(node.data);
       node.right && traverseInOrder(node.right);
     }
     traverseInOrder(this.root);
     return result;
   }
 }
 postOrder(){
   if(this.root == null){
     return null;
   }else {
     let result = new Array();
     function traversePostOrder(node){
       node.left && traversePostOrder(node.left);
       node.right && traversePostOrder(node.right);
       result.push(node.data);
     }
     traversePostOrder(this.root);
     return result;
   }
 }
 preOrder(){
   if(this.root == null){
     return null;
   }else {
     let result = new Array();
     function traversePreOrder(node){
       result.push(node.data);
       node.left && traversePostOrder(node.left);
       node.right && traversePostOrder(node.right);
     }
     traversePreOrder(this.root);
     return result;
   }
 }

//Iterative

 inorderTraversal = function(root) {
  const output = [];
  
  if (root === null) {
    return output;
  }
  
  /**
   * The goal is to maintain a stack of nodes to visit as we traverse 
   * down the tree. As we traverse down, We go left and push all the 
   * left nodes first in the stack. Once we reach to the bottom, we 
   * store the node value and traverse right.
   *           1
   *         /   \
   *        2     3    preorder traversal: 4 -> 2 -> 5 -> 1 -> 6 -> 3
   *       / \   /     (left -> root -> right)
   *      4   5 6
   */
  const stack = [];
  let curr = root;
  
  while (curr !== null || stack.length !== 0) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      output.push(curr.val);
      curr = curr.right;  
    }  
  }
  
  return output;
  };
  
  



}
