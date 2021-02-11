var fourSum = function(nums, target) {
  
	nums.sort((a,b) => a - b);
  const result = [];
  
  function recurse(arr, tar, res, k) {
    if(k === 2){
      twoSum(arr, tar, res);
      return;
    }
    for(let i = 0; i < arr.length; i++){
      while(arr[i] == arr[i-1]) i++; //it is already sorted..i랑 i-1랑 같을리 없음
      recurse(arr.slice(i+1), tar - arr[i], [...res, arr[i]], k-1);
      // arr[i] is already added to target
    }
  }


function twoSum(arr, target, res){
  let low = 0;
  let high = arr.length - 1;
  while(low < high){
    let sum = arr[low] + arr[high];
    for(let i = 0; i< arr.length ; i++){
      if(sum == target){
        res.push([...res, arr[low], arr[high]]);
        while(arr[low] == arr[low+1]) low++;
        while(arr[high] == arr[high-1]) high--;
        low++;
        high--;
      }else if(sum < target) low++;
      else high--;
    }
  }
 }

 recurse(nums, target, [], 4);
 return result;
}