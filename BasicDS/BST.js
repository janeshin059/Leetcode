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
       node.left && traversePreOrder(node.left);
       node.right && traversePreOrder(node.right);
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


  inorderTraversal2 = function(root) {
    let data= []
    let stack = []
    if(root===null) return data
    let current = root
    while(current!==null || stack.length){
    while(current!==null){
    stack.push(current)
    current = current.left
    }
    current = stack.pop()
    data.push(current.val)
    current = current.right
    }
    return data
    };
  
}
// Time complexity
//bfs, dfs : O(V+E) vertices + edge




/**
   *           1
   *         /   \
   *        2     3    bfs: 1 2 3 4 5 6
   *       / \   /     
   *      4   5 6
   */

// ['unweighted graph' 에서 최단 경로 찾는 bfs]
//BFS: root node 부터 시작해 가장 가까운 노드를 먼저 탐색(level order)

//최단거리 찾을 때 주로 이용(구글맵에서 특정 위치까지의 최단거리를 안내하거나, 페이스북에서 친구 추천하는 등)

//방문하지 않은 노드들이 생성한 큐에 담기기 때문에, 만약 큐에 노드가 있으면 탐색이 끝나지 않은 것.

//탐색한 노드를 큐애 하나씩 넣기
// 자식들을 다 방문했으면 부모 노드를 큐에서 빼줌
//큐의 길이가 0일떄까지 반복문 돌리기

//it allows us to keep a reference to nodes that we want to come back to, even though we haven’t checked/visited them yet.

bfs = function(root){
  if (root === null) return;

  let queue = [];
  queue.push(root);

  while(queue.length > 0){
    let cur = queue[0];
    if(cur.left) queue.push(cur.left);
    if(cur.right) queue.push(cur.right);
    //remove the current node (cur) from the queue
    queue.shift();
  }

}

//Time: O(n) 전체 노드 탐색
//Space: O(n) 전체 노드 탐색. 노드를 다 큐에 넣음

