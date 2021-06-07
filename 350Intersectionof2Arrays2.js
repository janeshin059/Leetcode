/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let j = 0;
  let i = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] == nums2[j]) {
      res.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }

  return res;
};

//Solution 2: Hash
var intersect = function(nums1, nums2) {
  let res = [];
  let nums1Map = {};
  for(let i = 0; i<nums1.length; i++){
      nums1Map[nums1[i]] = nums1Map[nums1[i]] ? nums1Map[nums1[i]]+1 : 1;
  }
  
  for(let n of nums2){
      if(nums1Map[n]){ 
          res.push(n);
          nums1Map[n] -= 1;
      }
  }
  
  return res;
};
