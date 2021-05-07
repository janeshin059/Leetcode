let threeSum = function(nums){
  let res = [];
  nums.sort((a,b) => a-b);
  for(let i = 0; i<nums.length;i++){
    let low = i+1;
    let high = nums.length-1;
    while(low<high){
      let s = nums[low] + nums[i] + nums[high];
      if(s === 0){
        res.push([nums[low],nums[i],nums[high]]);
        while(nums[low] === nums[low+1]) low++;
        while(nums[high] == nums[high-1]) high--;
        low++;
        high--;
      }
      else if(s<0){
        low++;
      }else high--;
    }
    while(nums[i] == nums[i+1]) i++;
  }

  return res;
}