/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  let output = [];
  function backTrack(output,current, open, close){
    if(current.length == n*2){
      output.push(current);
      return;
    }
    if(open<n) backTrack(output, current +"(", open +1, close);
    if(close < open) backTrack(output, current+")", open, close+1); //if close>open: invalid
  }
  backTrack(output, "",0,0);
  return output;
};


//조건에 맞는 걸 '다' 탐색하고 다시 그 전 걸로 돌아옴


var generateParenthesis = function(n) {
  let res = [];
  function generate(open, close, str){
      if(close>open){
          return;
      }
      if(close == n && open == n){
          res.push(str);
          return;
      }
      if(open < n){
      generate(open+1, close, str + "(")
      }
      if(close<open){
      generate(open, close+1, str + ")"); 
      }
  }
  generate(0,0,'');
  return res;
};


