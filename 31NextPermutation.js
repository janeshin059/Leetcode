/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 1 2 5 4 3
// 1 2 3 4 5
// 1 3 2 4 5
//O(N)


 const reverse = (arr, start, num) => {
  let end = arr.length -1;
  let i = start;
  let swapIndex = null;
  let swapValue = Infinity;
  while(start <= end){
      if(i < end) {
           [arr[i], arr[end]] = [arr[end], arr[i]];
      }
      if(arr[end] > num && arr[end] <=swapValue){
          swapValue = arr[end];
          swapIndex = end;
          
      }
      end--;
      i++;
  }
  return swapIndex;
}

var nextPermutation = function(nums) {
  //iterate from the back to find first decreasing number
  let i = nums.length - 1;
  while(nums[i-1] >= nums[i]){
      i--;
  }
  
  const swapIndex = reverse(nums,i,nums[i-1]);
  if(swapIndex !== null) {
      [nums[i-1], nums[swapIndex]] = [nums[swapIndex], nums[i-1]]
  }
  return nums;
};




