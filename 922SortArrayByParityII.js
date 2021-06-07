var sortArrayByParityII = function(nums) {
  
   for(let i = 0; i<nums.length;i++){
       if(i%2 !== 0){
         if(nums[i]%2 == 0){
           let j = i+1;
           while(nums[j]%2==0) j++;

           [nums[i],nums[j]] = [nums[j],nums[i]];
         }
           
       }else {
         if(nums[i]%2 !== 0){
           let j = i+1;
           while(nums[j]%2!==0) j++;
           [nums[i],nums[j]] = [nums[j],nums[i]];
         }
       }
   }
   return nums;
};