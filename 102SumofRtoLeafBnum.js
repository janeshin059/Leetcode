// 어차피 다 더하는 거니까, 다 더해서 한번에 바꿔 주면 됨
var sumRootToLeaf = function(root) {
    
  function dfs(current, str){
      if(!current) return 0;
      str+=current.val;
      if(!current.left && !current.right){
         return parseInt(str, 2);
      };
      return dfs(current.left, str) + dfs(current.right, str);
  }
  return dfs(root,'');
 
};

