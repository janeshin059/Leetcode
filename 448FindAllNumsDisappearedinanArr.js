/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  let hash = {};
  let output = [];

  for(let i = 0; i<nums.length;i++){
     hash[nums[i]] = hash[nums[i]] ?  hash[nums[i]] +1 : 1; 
  }
  for(let i = 1; i<=nums.length;i++){
    if(!hash[i]) output.push(i);
  }
  return output;
};