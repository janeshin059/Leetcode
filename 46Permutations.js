var permute = function(nums){
  const output = [];
  function dfs(curr, rest) {
    if(rest.length == 0){
      output.push(curr);
      return;
    }
    for(let i = 0; i < rest.length; i++){
      dfs([...curr, rest[i]], [...rest.slice(0,i), ...rest.slice(i+1)]);
    }
  }
  dfs([],nums);
  return output;
}

/**
   * The goal is break down the problem by finding permutations in subarrays.
   * So we will maintain a subarray of fixed elements and a subarray for 
   * exploring permutations.
   *
   *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
   * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
   *                  [3], [1, 2]    [2, 1], [3]    [2, 1, 3]
   *                                 [2, 3], [1]    [2, 3, 1]
   *                                 [3, 1], [2]    [3, 1, 2]
   *                                 [3, 2], [1]    [3, 2, 1]                                 
   */


/******Sol 2: Whether it is used or not**** */

var permute = function(nums) {
  let res = [];
  dfs(nums, [], Array(nums.length).fill(false),res);
  return res;
}

function dfs(letters, path, used, res) {
  if(path.length == letters.length) {
    res.push(Array.from(path));
    return;
  }
  for(let i = 0; i<letters.length;i++){
    if(used[i]) continue;
    path.push(letters[i]);
    used[i] = true;
    dfs(letters, path, used, res);
    path.pop();
    used[i] = false;
  }
}

