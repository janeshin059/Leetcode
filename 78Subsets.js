/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let res = [];
  
  function traverse(arr,index){

      res.push(arr);

      for(let i = index; i<nums.length;i++){
          traverse([...arr,nums[i]],i+1);
      }
  }
  traverse([],0);
  return res;
};

