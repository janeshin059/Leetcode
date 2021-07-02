/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    if(!nums || nums.length == 0){
      return 0;
    }
    let left = 0, right = 0, sum = 0, ans = Infinity;
    for(right = 0; right < nums.length; right++){ //never move any pointer backwards
      sum += nums[right]; //increase a size of the window(Move the RIGHT pointer)
      while(sum >= target){ //once it exceeds, we can shrink the window to find a better solution(Move the LEFT pointer)
        ans = Math.min(ans, right + 1 - left);
        sum -= nums[left++];
      }
    }
    return (ans != Infinity) ? ans : 0;
};