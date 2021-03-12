
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums, low=0, high = nums.length-1) {
    
  if(low<=high){
      // Find the center element of the array and make it the root node
      //if there isn't an exact center element, then round up to the next element on the right

      let mid = Math.floor((high+low)/2); 
      let root = new TreeNode(nums[mid]);
      root.left = sortedArrayToBST(nums, low, mid -1);
      root.right = sortedArrayToBST(nums, mid+1, high);
      return root;
      
  }
  return null;

};

var sortedArrayToBST2 = function(nums){
  if(nums.length == 0) return null;
  
  let mid = Math.floor(nums.length/2);
  let root = new TreeNode(nums[mid]);
  
  let leftSubTree = nums.slice(0, mid);
  root.left = sortedArrayToBST2(leftSubTree);
  
  let rightSubTree = nums.slice(mid+1, nums.length)
  root.right = sortedArrayToBST2(rightSubTree);
  return root;
}
//time :O(n)
//space: O(n) call stack can grow as the number of elements
