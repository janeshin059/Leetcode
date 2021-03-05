/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let res = 0;
   let start = 0;
   for(let i = 0; i<nums.length;i++){
       if(i>0 && nums[i-1] >= nums[i]) start = i;
       res = Math.max(res, i - start +1); //what is longer?
   }
   return res;
};