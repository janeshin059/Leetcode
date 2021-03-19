/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  let res = [];
  function choose(sum, arr, index){
      if(sum == target){
          res.push(arr);
          return;
      }
      for(let i = index ; i<candidates.length;i++){
          if(sum + candidates[i] <= target){  
              choose(sum+candidates[i], [...arr, candidates[i]], i);
              // 다시 반복문 돌아도 같다.
          }
      }
    
  }
  choose(0,[],0);
  return res;
};

//arr.push(candidates[i]) 계속 집어넣음. 이렇게 하면 안됨


