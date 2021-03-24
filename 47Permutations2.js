var permute = function(nums){
  const output = [];
  function dfs(curr, options) {
    if(options.length == 0){
      output.push(curr);
      return;
    }
    let visited = new Set();
    for(let i = 0; i < options.length; i++){
      if(visited.has(options[i])) continue;
      dfs([...curr, options[i]], [...options.slice(0,i), ...options.slice(i+1)]);
      visited.add(options[i]);
    }
  }
  dfs([],nums);
  return output;
}



