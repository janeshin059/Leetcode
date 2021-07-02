/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
   
  let max = -Infinity;
  let sum = 0;
  
  for(let r = 0; r<nums.length;r++){
      sum+=nums[r];
      if(r == k-1){
          max = sum; //first max
      }
      else if (r >= k){
          sum-= nums[r-k];
           max = Math.max(max, sum); //compare max to previous
      }
     
  }
  return max/k;
};

