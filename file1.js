class Node{
  constructor(data, left = null,right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(){
    this.root = null;
  }
  
  add(data){
    const node = this.root;
    
  

   
   
  }

  findMin() {
    let current = this.root;
    while(current.left){
      current = current.left
    }
    return current.data;
  }

  findMax(){
   let current = this.root;
   while(current.right){
     current = current.right;
   }
   return current.data;
  }

  find(data){
    let current = this.root;
    while(current.data !== data){
      if(current.data > data){
        current = current.left;
      }
      else if(current.data < data){
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
    }
    else current = current.right;
    }
    return false;
  }

  remove(data){
    
  }

  isBalanced(){
    return (this.findMinHeight() >= this.findMaxHeight() -1);
  }
  findMinHeight(node = this.root){
    if(node == null) return null;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if(left < right){
      return left +=1;
    }
    else return right +=1;
  }

  findMaxHeight(node = this.root){
    if(node == null) return null;
    let left = this.findMinHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if(left > right){
      return left += 1;
    }else return right +=1;
  }

  inOrder(){
   
  }

  postOrder(){
    

  }

  preOrder(){
    if(this.root == null){
      return null;
    }else {
      let result = new Array();
      function traversePreOrder(node){ 
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }

   

  }

  inorderTraversal = function(root){
    const output = [];
    if(root === null){
      return output;
    }
    const stack = [];
    let curr = root;
    while(curr !== null || stack.length !== 0){
      if(curr !== null){
        stack.push(curr);
        curr = curr.left;
      }
      else {
        curr = stack.pop();
        output.push(curr.val);
        curr = curr.right;
      }
    }
    return output;
  }
}