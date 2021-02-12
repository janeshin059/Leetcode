/**
 * @param {string} S
 * @return {string}
 */

var removeOuterParentheses = function(S) {
  let res = "";
  let count = 0;
  S.split('');
  for(let letter of S){
      if(letter == "(" ){
          if(count > 0){
              res+=letter;
          }
          count++;
      }else {
          count--;
          if(count > 0){
           res+=letter;
      }
      }
  }
  return res;
  
};