var intersection = function(nums1, nums2) {
  let inter = [];
  
  for(let i = 0; i< nums1.length; i++){
      if(nums2.indexOf(nums1[i]) > -1 && inter.indexOf(nums1[i]) == -1){
          inter.push(nums1[i]);     
      }  
  }
  return inter;
};